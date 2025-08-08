import express from 'express';
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, changeAvailability } from '../controllers/adminController.js';
import upload from '../middlewares/fileUploadMulter.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/login', loginAdmin);
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/all-doctors', authAdmin, allDoctors);
adminRouter.post('/change-availability', authAdmin, changeAvailability);
adminRouter.get('/appointments', authAdmin, appointmentsAdmin);

export default adminRouter;