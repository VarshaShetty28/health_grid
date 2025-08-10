import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import docterModel from '../models/docterModel.js'
import jwt from 'jsonwebtoken'
import appointmntModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        console.log("Request body:", req.body); // Debug log
        console.log("Image file:", imageFile); // Debug log

        // Check for missing fields
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }

        // Check for image file
        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid Email" });
        }

        // Check if email already exists
        const existingDoctor = await docterModel.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { 
            resource_type: "image",
            folder: "doctors" // organize uploads in folders
        });
        const imageUrl = imageUpload.secure_url;

        // Parse address safely
        let parsedAddress;
        try {
            parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
        } catch (error) {
            return res.status(400).json({ success: false, message: "Invalid address format" });
        }

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees: Number(fees), // Ensure fees is a number
            address: parsedAddress,
            available: true, // Default to available
            date: Date.now(),
            slots_booked: {} // Initialize empty slots_booked object
        };

        const newDoctor = new docterModel(doctorData);
        await newDoctor.save();

        res.status(201).json({ success: true, message: "Doctor added successfully" });
    } catch (error) {
        console.log("Add Doctor Error:", error);
        res.status(500).json({ success: false, message: "Server error while adding doctor", error: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        // Check credentials
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(
                { 
                    email: email,
                    role: 'admin',
                    iat: Math.floor(Date.now() / 1000) // issued at time
                }, 
                process.env.JWT_SECRET, 
                { expiresIn: '1d' }
            );
            
            return res.status(200).json({ 
                success: true, 
                token,
                message: 'Login successful' 
            });
        }

        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    } catch (error) {
        console.log("Login Error:", error);
        res.status(500).json({ success: false, message: 'Server error during login' });
    }
};

const allDoctors = async (req, res) => {
    try {
        const doctors = await docterModel.find({}).select('-password').sort({ date: -1 });
        
        if (!doctors || doctors.length === 0) {
            return res.status(200).json({ 
                success: true, 
                doctors: [], 
                message: 'No doctors found' 
            });
        }

        res.status(200).json({ 
            success: true, 
            doctors,
            count: doctors.length 
        });
    } catch (error) {
        console.log("Get All Doctors Error:", error);
        res.status(500).json({ success: false, message: "Server error while fetching doctors" });
    }
};

const appointmentsAdmin = async (req, res) => {
    try {
        const appointments = await appointmntModel
            .find({})
            .populate('docId', 'name speciality') // populate doctor details
            .populate('userId', 'name email') // populate user details if available
            .sort({ date: -1, slotTime: 1 });

        res.status(200).json({ 
            success: true, 
            appointments,
            count: appointments.length 
        });
    } catch (error) {
        console.log("Get Appointments Error:", error);
        res.status(500).json({ success: false, message: "Server error while fetching appointments" });
    }
};

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;

        // Validate docId
        if (!docId) {
            return res.status(400).json({ success: false, message: 'Doctor ID is required' });
        }

        // Check if doctor exists
        const docData = await docterModel.findById(docId);
        if (!docData) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        // Update availability
        const updatedDoctor = await docterModel.findByIdAndUpdate(
            docId, 
            { available: !docData.available },
            { new: true } // Return updated document
        );

        const status = updatedDoctor.available ? 'Available' : 'Not Available';
        
        res.status(200).json({ 
            success: true, 
            message: `Doctor is now ${status}`,
            available: updatedDoctor.available 
        });
    } catch (error) {
        console.log("Change Availability Error:", error);
        res.status(500).json({ success: false, message: "Server error while changing availability" });
    }
};

//API for appointments cancellation
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmntModel.findById(appointmentId);

    if (!appointmentData) {
      return res.json({ success: false, message: "Appointment not found" });
    }
    
    await appointmntModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await docterModel.findById(docId);

    let slots_booked = doctorData.slots_booked || {};
    if (slots_booked[slotDate]) {
      slots_booked[slotDate] = slots_booked[slotDate].filter(
        (e) => e !== slotTime
      );
    }

    await docterModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//api for dashboard
const adminDashboard = async (req,res) => {
    try{
        const doctors = await docterModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmntModel.find({})
        const dash_data = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }
        res.json({success: true, dash_data})

    } catch(error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addDoctor, loginAdmin, allDoctors, appointmentsAdmin, changeAvailability, appointmentCancel, adminDashboard };