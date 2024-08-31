# ERP-Placement Management System

## Overview

The ERP with Placement Management System is designed to streamline the process of managing student placements. It provides separate interfaces for Students, Admins, Companies, and Faculty, each with tailored functionalities to manage academic and placement-related activities effectively.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Storage**: Cloudinary

## Entities

### 1. **Student**
   - **Description**: A user who is looking for placement opportunities.
   - **Attributes**: 
     - Name
     - Email
     - Password
     - Skills
     - Academic Details
     - Resume
     - Application Status
     - Profile
     - Timetable
     - Marks
     - Materials
     - Notices
     - Placement Registration Details

### 2. **Admin**
   - **Description**: A user who manages the placement process.
   - **Attributes**:
     - Name
     - Email
     - Password
     - Role
     - Permissions
     - Manages students, faculty, subjects, notices, branches, job posts, placement drives, applications, and company details.

### 3. **Company**
   - **Description**: A user who provides placement opportunities.
   - **Attributes**:
     - Name
     - Email
     - Password
     - Location
     - Industry
     - Job Description
     - Manages job postings and views student profiles.

### 4. **Faculty**
   - **Description**: A user who manages academic records and materials.
   - **Attributes**:
     - Name
     - Email
     - Password
     - Manages and views student details, uploads marks, notices, course materials, and generates timetables.

## Relationships

- **Students** apply for jobs posted by **Admin**.
- **Admin** manages job postings, applications, student profiles, faculty, company applications, and placed student management.
- **Faculty** manages student details, uploads marks, and academic materials.

## Functionalities

### **Student Side**
1. **Home Dashboard**:
   - **Profile**: View or edit personal and academic details.
   - **Timetable**: View class schedule.
   - **Marks**: View academic performance.
   - **Material**: Access study materials.
   - **Notices**: View academic notices.
   - **Placement**: Navigate to placement dashboard.
2. **Placement Dashboard**:
   - **Register**: Register profile for placement.
   - **Company**: View details of registered companies.
   - **Apply Company**: Apply for job postings.
   - **Application**: View all applied applications.
   - **Placement Drive**: View all Drive details.

### **Admin Side**

1. **Home Dashboard**:
   - **Profile**: View or edit personal and administrative details.
   - **Student Management**: Manage student profiles.
   - **Faculty Management**: Manage faculty profiles.
   - **Admin Management**: Manage other admin profiles.
   - **Branch Management**: Add or delete branches.
   - **Subject Management**: Add or delete subjects.
   - **Notice Management**: Add, edit, or delete notices.
   - **Placement Dashboard**: Navigate to placement dashboard.
2. **Placement Dashboard**:
   - **Student Management**: Manage students registered for placement.
   - **Company Management**: Add, edit, or delete company details.
   - **Job Posting Management**: Add, edit, or delete job postings.
   - **Application Management**: Manage applications company-wise.
   - **Placement Drive Management**: Add or view details about placement drives.
   - **Placed Student Data**: Add or view placed student data.
   - **Placement Notices**: Add, edit, or delete placement notices.

### **Faculty Side**
1. **Home Dashboard**:
   - **Profile**: View or edit personal and academic details.
   - **Student Details**: View details of students.
   - **Upload Marks**: Upload marks for students.
   - **Notices**: View academic notices.
   - **Materials**: Upload or access course materials.
   - **Timetable Management**: Generate and manage class schedules.

## Installation

To run this system locally, follow the instructions below:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/placement-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd placement-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the environment variables, including the MongoDB connection and Cloudinary API keys.
5. Run the application:
   ```bash
   npm start
   ```
6. Access the application at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

