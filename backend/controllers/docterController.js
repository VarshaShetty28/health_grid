import docterModel from "../models/docterModel.js"

const changeAvailability = async (req,res) =>{
    try{

        const {docId} = req.body
        const docData = await docterModel.findById(docId)
        await docterModel.findByIdAndUpdate(docId,{available: !docData.available})
        res.json({success:true,message:'Avalability Changed'})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}

export {changeAvailability}