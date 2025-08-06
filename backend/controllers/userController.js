import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from 'cloudinary'
import docterModel from "../models/docterModel.js";
import appointmntModel from "../models/appointmentModel.js";
import razorpay from 'razorpay'
//api to register new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter A Strong Password" });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();
    //in the above user obj will get one _id property by using this we can create onetken so that user can login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//Api For User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Doesnot Exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api To get user profile data

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = await userModel.findById(userId).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api to Update UserProfile

const updateProfile = async (req, res) => {
  try {
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;
    const userId = req.user.id;

    if (!name || !phone || !dob || !gender) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const updates = {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
      updates.image = imageUpload.secure_url;
    }

    await userModel.findByIdAndUpdate(userId, updates);

    res.json({ success: true, message: 'Profile Updated!' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API To Book Appointment
const bookAppointment = async (req,res) =>{
  try{

    const userId = req.user.id;
    const { docId, slotDate, slotTime } = req.body;

    const docData = await docterModel.findById(docId).select('-password')

    if (!docData.available){
      return res.json ({success:false,message:'Doctor not available'})   
    }

    let slots_booked = docData.slots_booked


    // Checking for slot avaialability 
    if(slots_booked[slotDate]){
      if(slots_booked[slotDate].includes(slotTime)){
        return res.json ({success:false,message:'Slot not available'})   
      } else {
        slots_booked[slotDate].push(slotTime)
      }
    } else{
      slots_booked[slotDate] = []
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select('-password')
    delete docData.slots_booked

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount:docData.fees,
      slotTime,
      slotDate,
      date: Date.now()
    }

    const new_appointment = new appointmntModel(appointmentData)
    await new_appointment.save()

  //save new slot data in doctors data

  await docterModel.findByIdAndUpdate(docId, { slots_booked });
  res.json({success: true,message:"Appoitment Booked"})


  } catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

//for my -appoineyment 
const getMyAppointments = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointments = await appointmntModel.find({ userId }).sort({ date: -1 });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Api to cancle appointment 

const cancelAppointment = async (req, res) => {
  try {
    const userId = req.user.id;  // ✅ Extract from token via auth middleware
    const { appointmentId } = req.body;

    const appointmentData = await appointmntModel.findById(appointmentId);

    if (!appointmentData) {
      return res.json({ success: false, message: 'Appointment not found' });
    }

    if (appointmentData.userId.toString() !== userId) {
      return res.json({ success: false, message: 'Unauthorized action' });
    }

    await appointmntModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await docterModel.findById(docId);

    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);

    await docterModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const razorpayInstance = new razorpay({
  key_id:'',
  key_secret:''
})

//Online payment method - razor pay is used

const paymentRazorpay = async (req,res) =>{

}

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, getMyAppointments, cancelAppointment};
