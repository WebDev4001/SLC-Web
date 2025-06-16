# SLC Web Portal for MMMUT - AI Overview

## 1. Introduction/Vision

The Student Learning Centre (SLC) Web Portal for Madan Mohan Malaviya University of Technology (MMMUT) is envisioned as a centralized digital platform to enhance student engagement, resource accessibility, and administrative efficiency. Its primary purpose is to provide a comprehensive suite of tools and information for students, faculty (executives), and administrators, fostering a more connected and informed campus community. The portal aims to streamline access to academic resources, event information, council activities, and support services.

## 2. System Architecture Overview

The system is designed with a decoupled frontend and backend architecture, promoting scalability and maintainability.

*   **Frontend**: A user-facing web application (details likely in `Public/` or `src/` for a modern JS framework) responsible for rendering the user interface and interacting with the backend API.
*   **Backend API**: A Node.js application built with the Express.js framework. It handles business logic, data processing, and serves as the interface between the frontend and the database.
    *   **Core Technologies**: Node.js, Express.js
    *   **Authentication**: JWT (JSON Web Tokens) are used for securing API endpoints.
    *   **Middleware**: Includes token verification (`verifyToken.js`) and role-based access control (`checkRole.js`).
*   **Database**: MongoDB is the primary database, a NoSQL document-oriented database. Mongoose is used as the ODM (Object Data Modeling) library to interact with MongoDB.
    *   **Environment Variable for Connection**: `MONGO_URI`
*   **Alternative/Contextual Systems (from initial prompts, for AI awareness):**
    *   Initial project descriptions mentioned Firebase (Firestore for database, Firebase Auth for authentication) as a potential system. While the current backend implementation uses Node.js/Express/MongoDB, understanding this initial context might be useful for an AI analyzing project evolution or alternative deployment strategies. The data modeling concepts from a Firestore approach can still be relevant.

## 3. Core Functionality & Modules

### 3.1. Public Features (Accessible to all visitors)

*   **Resource Library**: Access to digital resources like e-books, notes, previous year papers (PYQs).
*   **Events & Announcements**: Information about upcoming events, workshops, and important university announcements.
*   **Council Information**: Details about student council members, roles, and activities.
*   **Chatbot**: An interactive chatbot (likely client-side, potentially with future AI backend integration) to answer common queries and guide users.

### 3.2. User System

*   **Authentication**:
    *   **General Users (Students)**: Google OAuth is the primary method for ease of access (as per user-facing descriptions; backend currently supports email/password which could be adapted or extended).
    *   **Executive Members & Admins**: Email/Password authentication is implemented in the current backend (`backend/routes/auth.js`).
*   **User Roles & Permissions (RBAC)**:
    *   **`viewer` (Default/Student)**: Access public content, potentially personalized features.
    *   **`editor` (Executive Member)**: Manage specific content areas based on their council role (e.g., upload books, post event details, make announcements). Requires login.
    *   **`admin`**: Full control over the system, including user management, role assignments, system configurations, and viewing activity logs. Requires login.
*   **User Model (`backend/models/User.js`)**:
    *   Fields: `name`, `email` (unique), `password` (hashed), `role` (enum: 'viewer', 'editor', 'admin'), `deviceInfo` (logs IP, userAgent, date of login/activity), `timestamps`.
    *   Password hashing is done pre-save using `bcryptjs`.
    *   Includes a method `comparePassword` for login.

### 3.3. Executive Dashboard (Role-Based Content Management)

*   Authenticated users with the `editor` role can access a dashboard to manage content relevant to their responsibilities.
*   Functionality would include CRUD operations (Create, Read, Update, Delete) for resources like books, events, announcements, etc. (Specific routes for these would be part of a full implementation, beyond the current auth/admin core).

### 3.4. Admin Control Panel (`backend/routes/admin.js`)

*   Accessible only to users with the `admin` role.
*   **User Management**:
    *   View list of all users and their roles (`GET /api/admin/users`).
    *   Update a user's role (`PATCH /api/admin/update-role`).
    *   Remove/delete users (`DELETE /api/admin/users/:userId`).
*   **Activity Logging & Export**:
    *   View user activity logs, including device information (`GET /api/admin/logs` - currently fetches user profiles with their `deviceInfo` arrays).
    *   Potential for exporting these logs (current implementation returns JSON).
*   **Analytics**: Potential for future integration of analytics on user engagement, resource usage, etc.

## 4. Data Model/Schema Ideas (Conceptual)

Based on the implemented User model and general requirements:

*   **Users (MongoDB Collection: `users`)**:
    *   `_id`: ObjectId (Primary Key)
    *   `name`: String
    *   `email`: String (Indexed, Unique)
    *   `password`: String (Hashed)
    *   `role`: String (Enum: 'viewer', 'editor', 'admin')
    *   `deviceInfo`: Array of Objects [{ `ip`: String, `userAgent`: String, `date`: Date }]
    *   `createdAt`: Timestamp
    *   `updatedAt`: Timestamp
    *   *(Future Consideration: `alias` or `studentId` for linking to university records)*

*   **ActivityLogs (Conceptual - could be a dedicated collection or derived from User.deviceInfo)**
    *   `_id`: ObjectId
    *   `userId`: ObjectId (Ref: Users)
    *   `action`: String (e.g., 'LOGIN', 'CONTENT_UPLOAD', 'USER_ROLE_CHANGE')
    *   `timestamp`: Date
    *   `ipAddress`: String
    *   `userAgent`: String
    *   `details`: Object (e.g., for content upload, could store content ID and title)

*   **Content (Example: Books - Conceptual, collection name `books`)**
    *   `_id`: ObjectId
    *   `title`: String
    *   `author`: String
    *   `category`: String
    *   `fileUrl`: String (Link to stored file)
    *   `uploadedBy`: ObjectId (Ref: Users, role 'editor' or 'admin')
    *   `createdAt`: Timestamp
    *   `updatedAt`: Timestamp

*   **Events (Conceptual, collection name `events`)**
    *   Similar structure: `title`, `description`, `date`, `venue`, `postedBy`, etc.

*(Context from Firebase Prompts: Firestore examples often show nested objects and arrays, which map well to MongoDB's document structure. For instance, user profiles might directly embed preferences or lists of submitted content IDs.)*

## 5. Key User & Admin Workflows

*   **User Registration**:
    1.  Frontend: User provides name, email, password.
    2.  Backend (`POST /api/auth/register`): Validates input, checks for existing user, creates new User document (password hashed by model), generates JWT.
*   **User Login**:
    1.  Frontend: User provides email, password.
    2.  Backend (`POST /api/auth/login`): Validates input, finds user by email, compares password, records device info, generates JWT.
*   **Content Management (by Executive/Editor)**:
    1.  Frontend: Editor logs in, navigates to dashboard section (e.g., "Manage Books").
    2.  Frontend: Accesses protected route (e.g., `POST /api/books` - requires `verifyToken` and `checkRole(['editor', 'admin'])`).
    3.  Backend: Middleware verifies token and role. Route handler processes request (e.g., saves book details to DB).
*   **User Management (by Admin)**:
    1.  Frontend: Admin logs in, navigates to "User Management" panel.
    2.  Frontend: Accesses protected admin route (e.g., `PATCH /api/admin/update-role`).
    3.  Backend: `verifyToken` and `checkRole(['admin'])` protect the route. Route handler updates user role in DB.
*   **Log Viewing (by Admin)**:
    1.  Frontend: Admin logs in, navigates to "Activity Logs".
    2.  Frontend: Accesses protected admin route (`GET /api/admin/logs`).
    3.  Backend: Middleware protects. Route handler fetches user data including `deviceInfo`.

## 6. Security Highlights

*   **Role-Based Access Control (RBAC)**: Implemented via `verifyToken` and `checkRole` middleware to restrict access to routes and functionalities based on user roles.
*   **JWT Authentication**: Stateless authentication mechanism using JSON Web Tokens. `JWT_SECRET` is critical and must be kept secure.
*   **Password Hashing**: User passwords are hashed using `bcryptjs` before being stored in the database.
*   **Input Validation**: Basic validation is present in routes (e.g., checking for required fields). Comprehensive server-side validation is crucial for all user inputs to prevent injection attacks and ensure data integrity.
*   **Environment Variables**: Sensitive information like `MONGO_URI`, `JWT_SECRET`, `CORS_ORIGIN` is managed through environment variables (`backend/.env`). This file should be git-ignored.
*   **HTTPS**: Essential for production deployment to protect data in transit.
*   **Rate Limiting, Helmet.js**: Consider for production to protect against brute-force attacks and common web vulnerabilities.

## 7. Setup & Deployment Pointers for an AI Agent

To replicate, run, or deploy this system, an AI agent would need to consider the following:

1.  **Prerequisites**:
    *   Node.js and npm (or yarn) installed.
    *   MongoDB instance accessible (local or cloud-hosted).

2.  **Backend Setup**:
    *   Clone the repository.
    *   Navigate to the `backend` directory.
    *   **Install Dependencies**: Run `npm install` (or `yarn install`) to install packages listed in `package.json` (e.g., `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, `cors`, `dotenv`).
    *   **Environment Variables**:
        *   Create a `.env` file in the `backend` directory.
        *   Populate it with necessary variables:
            ```
            JWT_SECRET=your_strong_jwt_secret_here
            MONGO_URI=your_mongodb_connection_string
            CORS_ORIGIN=http://your_frontend_url (e.g., http://localhost:3000)
            PORT=5000 # Or any other preferred port
            ```
    *   **Running the Server**: Execute `node server.js` or a script defined in `package.json` (e.g., `npm start`).

3.  **Frontend Setup** (General steps, assuming a separate frontend application):
    *   Navigate to the frontend application directory.
    *   Install dependencies (e.g., `npm install`).
    *   Configure the frontend to communicate with the backend API URL (e.g., `http://localhost:5000/api`).
    *   Build the frontend for production if applicable (e.g., `npm run build`).
    *   Serve the frontend static files or run its development server.

4.  **Database**:
    *   Ensure the MongoDB server is running and accessible with the URI provided in `MONGO_URI`.
    *   No explicit migration scripts are defined in the current setup; Mongoose will create collections when data is first written if they don't exist.

5.  **Deployment Considerations**:
    *   **Process Manager**: Use a process manager like PM2 for Node.js applications in production to handle restarts and logging.
    *   **Reverse Proxy**: Set up a reverse proxy (e.g., Nginx, Apache) to handle incoming traffic, SSL termination (HTTPS), and potentially serve static frontend files.
    *   **Security**: Ensure all security best practices are followed (firewall, regular updates, secure `JWT_SECRET`, etc.).
    *   **CORS**: Double-check `CORS_ORIGIN` is correctly set for the production frontend URL.

This overview should provide a solid foundation for another AI to understand the SLC web portal's architecture, functionality, and technical implementation details based on the provided backend code and project context.
