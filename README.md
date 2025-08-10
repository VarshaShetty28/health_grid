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

### About Us Page

![About Us](ScreenShots/About_Us.png)
*Screenshot of the About Us page.*

### Admin Add Doctor

![Admin Add Doctor](ScreenShots/Admin_AddDoctor.png)
*Admin panel to add a new doctor.*

### Admin Appointments

![Admin Appointments](ScreenShots/Admin_Appointments.png)
*Admin view of all appointments.*

### Admin Dashboard

![Admin Dashboard](ScreenShots/Admin_Dashboard.png)
*Main dashboard for admin overview.*

### Admin Doctor List

![Admin Doctor List](ScreenShots/Admin_DoctorList.png)
*List of all doctors from admin panel.*

### All Doctors Page (After Login)

![All Doctors](ScreenShots/AllDoctorsPage_AfterLogin.png)
*Page showing all doctors available to patients after login.*

### Doctor Appointments

![Doctor Appointments](ScreenShots/Doctor_Appointments.png)
*Doctor’s view of their appointments.*

### Doctor Dashboard

![Doctor Dashboard](ScreenShots/Doctor_Dashboard.png)
*Doctor’s dashboard interface.*

### Home Page (Before Login)

![Home Page](ScreenShots/HomePage_BeforeLogin.png)
*Landing page before user login.*

### Doctor Profile

![Doctor Profile](ScreenShots/Doctor_Profile.png)
*Doctor’s profile page.*

---

## License

MIT License

---

## Contact

Email: [your.email@example.com](mailto:your.email@example.com)

```

Just paste this whole block into your `README.md` file.  
Let me know if you want me to generate and save the file for you!
```
