Sure! Here's the **entire README content in a single code block** for easy copying into your environment:

````markdown
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
````

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Setup `.env` file in backend folder:

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

7. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

* Register as a patient, doctor, or admin.
* Patients can book appointments with doctors.
* Doctors can manage their schedules.
* Admins can manage the system users and appointments.

---
## Screenshots

<table>
  <tr>
    <td><img src="ScreenShots/About_Us.png" alt="About Us" width="200" /><br><em>About Us page</em></td>
    <td><img src="ScreenShots/Admin_AddDoctor.png" alt="Admin Add Doctor" width="200" /><br><em>Admin Add Doctor</em></td>
    <td><img src="ScreenShots/Admin_Appointments.png" alt="Admin Appointments" width="200" /><br><em>Admin Appointments</em></td>
  </tr>
  <tr>
    <td><img src="ScreenShots/Admin_Dashboard.png" alt="Admin Dashboard" width="200" /><br><em>Admin Dashboard</em></td>
    <td><img src="ScreenShots/Admin_DoctorList.png" alt="Admin Doctor List" width="200" /><br><em>Admin Doctor List</em></td>
    <td><img src="ScreenShots/AllDoctorsPage_AfterLogin.png" alt="All Doctors" width="200" /><br><em>All Doctors (After Login)</em></td>
  </tr>
  <tr>
    <td><img src="ScreenShots/Doctor_Appointments.png" alt="Doctor Appointments" width="200" /><br><em>Doctor Appointments</em></td>
    <td><img src="ScreenShots/Doctor_Dashboard.png" alt="Doctor Dashboard" width="200" /><br><em>Doctor Dashboard</em></td>
    <td><img src="ScreenShots/HomePage_BeforeLogin.png" alt="Home Page" width="200" /><br><em>Home Page (Before Login)</em></td>
  </tr>
  <tr>
    <td><img src="ScreenShots/Doctor_Profile.png" alt="Doctor Profile" width="200" /><br><em>Doctor Profile</em></td>
    <td></td>
    <td></td>
  </tr>
</table>
