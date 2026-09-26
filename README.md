# 🎓 Learning Management System (LMS)

A full-stack **Learning Management System (LMS)** built using **React.js, Node.js, Express.js, MongoDB, and Mongoose**.

This project provides a complete online learning experience where users can register, log in, browse courses, enroll in courses, watch course lectures, track their learning, submit reviews, manage their profiles, and make online payments.

The project also includes functionality for **course creators/instructors** to create and manage courses and lectures.

---

# 🏠 About The Project

The **Learning Management System (LMS)** is a modern full-stack web application designed to provide an online platform for learning and course management.

Users can explore available courses, view course information, enroll in courses, access lectures, watch course videos, and submit ratings and reviews.

The application follows a separate frontend and backend architecture with REST APIs connecting the client application to the server and MongoDB database.

### Main Goals

* Build a real-world full-stack LMS application
* Implement online course management
* Provide a user-friendly learning experience
* Implement secure authentication
* Support Google authentication
* Allow instructors to create and manage courses
* Manage course lectures dynamically
* Implement course enrollment
* Implement video-based learning
* Implement course reviews and ratings
* Integrate online payment functionality
* Implement REST API development
* Work with MongoDB and Mongoose
* Deploy a full-stack application

---

# ✨ Features

## 👤 User Features

* User Registration
* User Login
* User Logout
* Google Authentication
* User Profile
* Update User Profile
* Profile Image Upload
* Change Password
* Forgot Password
* Reset Password
* JWT Authentication
* Cookie-Based Authentication
* Browse Courses
* Course Search
* Course Details
* Course Enrollment
* Enrolled Courses
* Watch Course Lectures
* Lecture Navigation
* Course Video Playback
* Course Reviews
* Course Ratings
* Submit Course Review
* Update Profile Information
* Online Payment
* Responsive UI

---

# 👨‍🏫 Course Creator Features

Course creators can manage their courses and learning content.

### Course Management

Creators can:

* Create Course
* Update Course
* Delete Course
* View Created Courses
* Publish Courses
* Manage Course Information
* Upload Course Thumbnail
* Add Course Lectures
* Update Lectures
* Delete Lectures
* Upload Lecture Videos
* Manage Course Content

### Lecture Management

Creators can:

* Add Lecture
* Edit Lecture
* Delete Lecture
* Upload Lecture Video
* Set Lecture Title
* Set Lecture Description
* Organize Course Lectures
* Manage Course Video Content

---

# 📚 Course Features

Each course can contain information such as:

* Course Title
* Course Description
* Course Thumbnail
* Course Category
* Course Level
* Course Price
* Course Creator
* Course Lectures
* Lecture Videos
* Course Reviews
* Course Ratings
* Enrollment Information
* Published Status

Example:

```text
Course
├── Title
├── Description
├── Thumbnail
├── Category
├── Level
├── Price
├── Creator
├── Lectures
│   ├── Lecture 1
│   ├── Lecture 2
│   ├── Lecture 3
│   └── ...
├── Reviews
├── Rating
└── Published Status
```

---

# 🎥 Lecture & Video Learning

The LMS provides video-based learning.

Students can:

* Open enrolled courses
* View course lectures
* Select individual lectures
* Watch lecture videos
* Navigate between lectures
* Continue learning through course content

Course videos are uploaded through the backend using **Multer** and served through the backend uploads directory.

Example media URL:

```text
https://lms-wmy8.onrender.com/uploads/course-video.mp4
```

---

# 🎓 Course Enrollment

Users can enroll in available courses.

Enrollment flow:

```text
Browse Courses
      │
      ▼
Course Details
      │
      ▼
Enroll / Purchase
      │
      ▼
Payment
      │
      ▼
Enrollment Created
      │
      ▼
Enrolled Courses
      │
      ▼
Watch Lectures
```

After successful enrollment, the course becomes available in the user's enrolled courses section.

---

# ⭐ Reviews & Ratings

Students can provide feedback for courses.

Review functionality includes:

* Add Review
* Course Rating
* Review Description
* View Course Reviews
* View Reviewer Information
* Display Course Ratings

Example:

```text
Course
 │
 ├── Rating
 │
 └── Reviews
      ├── User
      ├── Rating
      └── Comment
```

---

# 🔐 Authentication

The project implements secure authentication for users.

### Authentication Methods

* Email/Password Authentication
* JWT Authentication
* Google Authentication
* Cookie-Based Authentication

Google authentication is implemented using **Firebase Authentication**.

### Authentication Flow

```text
User
 │
 ▼
Login / Register
 │
 ├───────────────┐
 ▼               ▼
Email/Password   Google Login
 │               │
 └───────┬───────┘
         ▼
   Backend Authentication
         │
         ▼
      JWT Token
         │
         ▼
   Authentication Cookie
         │
         ▼
  Protected Routes
```

Protected functionality requires an authenticated user.

---

# 💳 Payment Integration

The LMS supports online course payment through a payment gateway.

The project uses **Razorpay** for payment integration.

### Payment Flow

```text
Course Details
      │
      ▼
Enroll / Buy Course
      │
      ▼
Create Payment Order
      │
      ▼
Razorpay Payment
      │
      ▼
Payment Verification
      │
      ▼
Successful Payment
      │
      ▼
Course Enrollment
      │
      ▼
Access Course Lectures
```

Payment credentials are stored securely using environment variables.

---

# 🤖 AI Features

The LMS also includes AI-related functionality through the backend.

AI functionality can be used to support the learning platform and provide AI-powered features.

The backend contains dedicated AI functionality and API routes for handling AI requests.

---

# 🧰 Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* React Router DOM
* Redux Toolkit
* Tailwind CSS
* Axios
* React Icons
* React Toastify
* HTML5
* CSS3

## Backend

* Node.js
* Express.js
* JavaScript
* REST APIs
* JWT
* bcrypt / bcryptjs
* Nodemailer
* Multer

## Database

* MongoDB
* Mongoose

## Authentication

* JSON Web Token
* Firebase Authentication
* Google Authentication
* Cookies

## Payment

* Razorpay

## File Upload

* Multer
* Backend Static File Storage

---

# 🏗️ Project Architecture

The project follows a typical full-stack architecture.

```text
                         ┌─────────────────────┐
                         │       User          │
                         │   Web Browser       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Frontend       │
                         │   React + Vite      │
                         │ Redux + Tailwind    │
                         └──────────┬──────────┘
                                    │
                              HTTP Requests
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Backend       │
                         │ Node.js + Express   │
                         │      REST APIs      │
                         └───────┬───────┬─────┘
                                 │       │
                     Mongoose    │       │ File Upload
                                 │       │
                                 ▼       ▼
                         ┌───────────┐  ┌──────────────┐
                         │ MongoDB   │  │   Uploads     │
                         │ Database  │  │ Course Videos │
                         └───────────┘  └──────────────┘
```

---

# 📂 Project Structure

```text
LMS/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── config/
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── courseController.js
│   │   ├── paymentController.js
│   │   ├── reviewController.js
│   │   ├── aiController.js
│   │   └── ...
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   ├── courseModel.js
│   │   ├── reviewModel.js
│   │   └── ...
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── aiRoutes.js
│   │   └── ...
│   │
│   ├── middleware/
│   │
│   ├── public/
│   │   └── uploads/
│   │       └── course videos
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── .gitattributes
└── README.md
```

> The exact folder and file names may vary depending on the final project implementation.

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/prathamesh66/LMS.git
```

Navigate into the project:

```bash
cd LMS
```

---

# 📦 Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

# 📦 Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### ⚠️ Important

Never upload your `.env` file to GitHub.

Add:

```gitignore
.env
node_modules
```

to `.gitignore`.

---

# ▶️ Running The Project

## Start Backend

```bash
cd backend
npm run dev
```

Backend will run on:

```text
http://localhost:8000
```

---

## Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 🔄 Application Flow

```text
                         LMS
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
           User                    Course Creator
             │                         │
             ▼                         ▼
       Login / Register          Create Course
             │                         │
             ▼                         ▼
        Browse Courses          Add Lectures
             │                         │
             ▼                         ▼
       Course Details           Upload Videos
             │                         │
             ▼                         ▼
       Enroll / Payment         Publish Course
             │
             ▼
      Enrolled Courses
             │
             ▼
       Select Lecture
             │
             ▼
       Watch Video
             │
             ▼
       Submit Review
```

---

# 🔌 API Overview

The backend provides REST APIs for communication between the frontend and server.

## Authentication APIs

Typical authentication operations include:

```text
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/forgot-password
POST   /auth/reset-password
GET    /auth/current-user
```

---

## User APIs

User APIs handle:

```text
GET    /user/profile
PUT    /user/profile
PUT    /user/change-password
```

---

## Course APIs

Course APIs support course management and course access.

```text
POST   /course/create
PUT    /course/edit/:id
DELETE /course/delete/:id

GET    /course/published
GET    /course/creator
GET    /course/:id
```

---

## Lecture APIs

Lecture APIs support lecture management.

```text
POST   /course/:courseId/lecture
PUT    /lecture/:lectureId
DELETE /lecture/:lectureId
GET    /lecture/:lectureId
```

Lecture APIs can also handle uploaded course videos.

---

## Enrollment APIs

Enrollment functionality allows users to access purchased courses.

```text
POST   /enrollment
GET    /enrollment
```

> Exact API endpoint names may differ depending on the final backend route configuration.

---

## Review APIs

```text
POST   /review
GET    /review/course/:courseId
GET    /review/all
```

Reviews contain course ratings, comments, and user information.

---

## Payment APIs

```text
POST   /payment/create-order
POST   /payment/verify
```

Payment APIs communicate with the Razorpay payment gateway.

---

## AI APIs

The backend also contains APIs for AI-powered functionality.

```text
POST   /ai/...
```

> Exact AI endpoint names depend on the final implementation.

---

# 🗄️ Database

The application uses **MongoDB** as the primary database.

**Mongoose** is used for:

* Schema creation
* Data validation
* Database queries
* Relationships
* CRUD operations
* Population of related documents

### Main Collections

```text
Users
Courses
Lectures
Reviews
Enrollments
Payments
```

---

# 👤 User Data

A user can contain information such as:

```text
User
├── name
├── email
├── password
├── photoUrl
├── role
├── enrolledCourses
├── createdCourses
├── reviews
└── account information
```

Authentication information is handled securely through the application's authentication system.

---

# 📚 Course Data

Example course structure:

```text
Course
├── title
├── description
├── thumbnail
├── category
├── level
├── price
├── creator
├── lectures
├── reviews
├── rating
└── published
```

---

# 🎬 Lecture Data

Example lecture structure:

```text
Lecture
├── title
├── description
├── videoUrl
├── course
└── createdAt
```

Course lecture videos are uploaded using **Multer**.

---

# 💰 Course Purchase & Enrollment

The platform supports paid course enrollment.

Example:

```text
Course
   │
   ▼
Course Price
   │
   ▼
Razorpay Order
   │
   ▼
Payment
   │
   ▼
Payment Verification
   │
   ▼
Enrollment
   │
   ▼
Course Access
```

---

# ⭐ Course Reviews

After accessing a course, users can provide feedback.

Example:

```text
Student
   │
   ▼
Course
   │
   ├── Rating: ⭐⭐⭐⭐⭐
   │
   └── Review
```

The review system stores the reviewer information along with the course review.

---

# 📱 Responsive Design

The LMS frontend is designed to work across different screen sizes.

### Supported Devices

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Responsive layouts are implemented using **Tailwind CSS** and responsive React components.

---

# 🔒 Security

The application follows several security practices.

### Authentication

JWT-based authentication is used to protect authenticated functionality.

### Password Security

Passwords are hashed before being stored in MongoDB.

### Cookie Authentication

Authentication information can be maintained through secure cookies.

### Authorization

Protected APIs verify the authenticated user before allowing restricted operations.

Example:

```text
User
 │
 ├── Student
 │      ├── Browse Courses
 │      ├── Enroll
 │      ├── Watch Lectures
 │      └── Submit Reviews
 │
 └── Course Creator
        ├── Create Course
        ├── Edit Course
        ├── Manage Lectures
        └── Upload Videos
```

---

# 🧪 Testing

The project can be tested manually using:

* Browser
* Postman
* MongoDB Compass
* Browser Developer Tools

API testing can be performed using Postman.

Example:

```text
POST /auth/login
```

Request:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

---

# 📦 Course Video Storage

Course lecture videos are stored under:

```text
backend/public/uploads/
```

The backend exposes the upload directory through Express static middleware:

```text
/uploads
```

Example:

```text
https://lms-wmy8.onrender.com/uploads/course-video.mp4
```

The project uses **Git LFS** for large MP4 files stored in the repository.

This is useful for keeping large course-video files out of normal Git object storage.

---

# 🚀 Deployment

The LMS project is deployed using:

### Frontend

**Vercel**

```text
https://lms-puce-zeta.vercel.app
```

### Backend

**Render**

```text
https://lms-wmy8.onrender.com
```

### Database

**MongoDB**

The backend connects to MongoDB for storing users, courses, lectures, reviews, enrollments, and other application data.

### Repository

**GitHub**

```text
https://github.com/prathamesh66/LMS
```

---

# 🌐 Production Architecture

```text
                 User Browser
                      │
                      ▼
             ┌─────────────────┐
             │     Vercel      │
             │ React + Vite    │
             └────────┬────────┘
                      │
                  REST API
                      │
                      ▼
             ┌─────────────────┐
             │     Render      │
             │ Node + Express  │
             └───────┬─────────┘
                     │
             ┌───────┴─────────┐
             │                 │
             ▼                 ▼
       ┌───────────┐    ┌──────────────┐
       │ MongoDB   │    │    Uploads   │
       │ Database  │    │ Course Videos│
       └───────────┘    └──────────────┘
```

---

# 🔮 Future Improvements

Possible future improvements include:

* Course progress tracking
* Lecture completion tracking
* Course certificates
* Instructor dashboard
* Student dashboard improvements
* Advanced course search
* Course filtering
* Course categories
* Course wishlist
* Notifications
* Email notifications
* Advanced AI learning assistant
* AI course recommendations
* AI-generated quizzes
* Online quizzes and assessments
* Assignment management
* Student performance analytics
* Instructor analytics dashboard
* Course discussion forum
* Live classes
* Real-time notifications
* Multiple payment gateways
* Subscription-based courses
* Video streaming optimization
* CDN-based video delivery
* Automated testing
* Performance optimization

---

# 🎯 Learning Outcomes

This project helped demonstrate practical knowledge of:

### Frontend Development

* React.js
* Vite
* React Hooks
* React Router
* Redux Toolkit
* Component Architecture
* State Management
* API Integration
* Form Handling
* Responsive Design
* Tailwind CSS

### Backend Development

* Node.js
* Express.js
* REST APIs
* Controllers
* Routes
* Middleware
* JWT Authentication
* Authorization
* File Upload
* Error Handling

### Database

* MongoDB
* Mongoose
* CRUD Operations
* Schema Design
* Database Relationships
* Population

### Authentication

* JWT
* Cookies
* Firebase Authentication
* Google Authentication
* Password Hashing

### Payment

* Razorpay Integration
* Payment Order Creation
* Payment Verification
* Enrollment Flow

### Full Stack

* Frontend ↔ Backend Communication
* REST API Integration
* Authentication Flow
* Course Management
* Lecture Management
* Video Upload
* Online Learning Architecture
* Reviews and Ratings
* Payment Workflow
* Deployment

---

# 🛠️ Development Tools

The project was developed using:

* VS Code
* Git
* GitHub
* Postman
* MongoDB
* MongoDB Compass
* Vercel
* Render
* Firebase

---

# 📌 Git Commands

Clone the project:

```bash
git clone https://github.com/prathamesh66/LMS.git
```

Check status:

```bash
git status
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Your commit message"
```

Push:

```bash
git push origin main
```

---

# 📦 Git LFS

Large course videos are managed using **Git LFS**.

Install Git LFS:

```bash
git lfs install
```

Track MP4 files:

```bash
git lfs track "*.mp4"
```

Check tracked LFS files:

```bash
git lfs ls-files
```

Push changes:

```bash
git add .
git commit -m "Add course videos"
git push origin main
```

---

# 🧑‍💻 Author

## Prathamesh Deshmukh

MCA Student | MERN Stack Developer

### Skills

* React.js
* JavaScript
* Redux Toolkit
* Node.js
* Express.js
* MongoDB
* Mongoose
* Tailwind CSS
* REST APIs
* JWT
* Git & GitHub

---

# ⭐ Project Highlights

```text
✅ Full-Stack Learning Management System
✅ React + Vite Frontend
✅ Node.js + Express Backend
✅ MongoDB Database
✅ User Registration & Login
✅ Google Authentication
✅ Firebase Authentication
✅ JWT Authentication
✅ Cookie-Based Authentication
✅ User Profile Management
✅ Course Management
✅ Course Creator Functionality
✅ Course Creation
✅ Course Editing
✅ Course Publishing
✅ Lecture Management
✅ Course Video Upload
✅ Course Video Playback
✅ Course Enrollment
✅ Razorpay Payment Integration
✅ Course Reviews
✅ Course Ratings
✅ AI Functionality
✅ REST APIs
✅ Responsive UI
✅ Git LFS for Large Course Videos
✅ Vercel Deployment
✅ Render Deployment
```

---

# 🌐 Live Project

### Frontend

https://lms-puce-zeta.vercel.app

### Backend

https://lms-wmy8.onrender.com

### GitHub Repository

https://github.com/prathamesh66/LMS

---

## Made with ❤️ using the MERN Stack

**React.js + Node.js + Express.js + MongoDB**
