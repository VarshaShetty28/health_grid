# Doctor Appointment Booking System (MERN)

A full-stack doctor appointment booking application built with **MongoDB, Express, React, and Node.js** allowing patients to book appointments, doctors to manage schedules, and admins to oversee the system.

---

## Features

- User registration and login with roles (Patient, Doctor, Admin)  
- Patients can browse doctors and book appointments  
- Doctors can view and manage appointments  
- Admins can manage users and appointments  
- Responsive, user-friendly interface

---

## Technologies Used

- Frontend: React, React Router, Tailwind CSS (or your CSS framework)  
- Backend: Node.js, Express.js  
- Database: MongoDB with Mongoose  
- Authentication: JWT (JSON Web Tokens)

---

## Getting Started

### Prerequisites

- Node.js (v14+)  
- MongoDB (local or cloud)  
- npm or yarn package manager

### Installation

1. Clone the repo and navigate to the project root.  
2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Setup .env file in backend folder:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start backend server:
   ```bash
   npm start
   ```

6. Start frontend app:
   ```bash
   cd ../frontend
   npm start
   ```
   
Visit http://localhost:3000 in your browser.

## Usage

Register as a patient, doctor, or admin.

Payment gateway using Razorpay — users can pay online or opt for cash.

Patients can book appointments with doctors.

Doctors can manage their schedules.

Admins can manage the system users and appointments.

## Screenshots

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">

  <div>
    <img src="./ScreenShots/About_Us.png" alt="About Us" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>About Us page</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Admin_AddDoctor.png" alt="Admin Add Doctor" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Admin Add Doctor</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Admin_Appointments.png" alt="Admin Appointments" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Admin Appointments</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Admin_Dashboard.png" alt="Admin Dashboard" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Admin Dashboard</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Admin_DoctorList.png" alt="Admin Doctor List" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Admin Doctor List</em></p>
  </div>

  <div>
    <img src="./ScreenShots/AllDoctorsPage_AfterLogin.png" alt="All Doctors" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>All Doctors (After Login)</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Doctor_Appointments.png" alt="Doctor Appointments" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Doctor Appointments</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Doctor_Dashboard.png" alt="Doctor Dashboard" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Doctor Dashboard</em></p>
  </div>

  <div>
    <img src="./ScreenShots/HomePage_BeforeLogin.png" alt="Home Page" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Home Page (Before Login)</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Doctor_Profile.png" alt="Doctor Profile" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Doctor Profile</em></p>
  </div>

  <div>
    <img src="./ScreenShots/Appointments_Paid.png" alt="Appointments Paid" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Appointments Paid</em></p>
  </div>

  <div>
    <img src="./ScreenShots/My_Appointments_Page.png" alt="My Appointments" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>My Appointments Page</em></p>
  </div>

</div>

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <div style="width: 48%;">
    <img src="./ScreenShots/Payment_page.png" alt="Payment Page" style="width: 100%; border-radius: 8px;" />
    <p align="center"><em>Payment Page</em></p>
  </div>
</div>
