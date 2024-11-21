# Substitute Teacher Application Database Schema

This repository provides the MySQL database schema for managing substitute teacher requests, teacher availability, and class recordings for schools. It supports the functionality of schools raising substitute teacher requests, matching available teachers based on qualifications and availability, and handling notifications and recordings for completed classes.

## Database Schema Overview

### Tables Included:
1. **school**: Stores information about schools.
2. **teacher**: Stores details about teachers, their qualifications, experience, availability, and contact info.
3. **subject**: Stores information about different subjects that can be taught.
4. **grade_subjects**: Links subjects with the specific grades they apply to.
5. **request_status**: Tracks the status of substitute teacher requests, including the teacher assigned.
6. **request_notifications**: Keeps track of which teachers are notified about a request and their response.
7. **recordings**: Stores links to recordings of classes taken by substitute teachers.

### Trigger:
- **auto_reject_request**: A MySQL trigger that automatically updates the request's status to `Rejected` when all notified teachers have rejected the request.

## Setup Instructions

### Prerequisites
- MySQL server installed and running.
- Access to a MySQL client or any MySQL-compatible tool (e.g., MySQL Workbench, phpMyAdmin, or command-line client).

### Steps to Set Up
1. **Create a Database**:
   - Run the following SQL command to create a new database for the application:
     ```sql
     CREATE DATABASE SubstituteTeacherApp;
     ```

2. **Use the Database**:
   - Switch to the newly created database:
     ```sql
     USE SubstituteTeacherApp;
     ```

3. **Import the Schema**:
   - Copy the entire database schema provided in `schema.sql` into your MySQL client and execute it. This will create the necessary tables and the trigger for your application.
   
   If you have already deleted previous tables using the provided SQL command, this schema will rebuild the required tables from scratch.

4. **Verify the Tables**:
   - To check if the tables were created successfully, run the following SQL command:
     ```sql
     SHOW TABLES;
     ```
   - You should see the following tables:
     - `school`
     - `teacher`
     - `subject`
     - `grade_subjects`
     - `request_status`
     - `request_notifications`
     - `recordings`

## Table Structure

### `school` Table
Stores details of each school.
- `id`: Primary key, auto-incremented.
- `name`: Name of the school.
- `working_hours`: Working hours of the school.
- `contact_info`: Contact information (phone or email).

### `teacher` Table
Stores details about the teachers.
- `id`: Primary key, auto-incremented.
- `name`: Name of the teacher.
- `qualifications`: Qualifications of the teacher.
- `experience`: Years of experience.
- `grades_taught`: Grades taught by the teacher (comma-separated).
- `availability`: Whether the teacher is available for teaching.
- `availability_time_slots`: Time slots when the teacher is available.
- `contact_info`: Contact information (phone or email).

### `subject` Table
Stores subjects that teachers can teach.
- `id`: Primary key, auto-incremented.
- `name`: Name of the subject (e.g., Mathematics, Science).

### `grade_subjects` Table
Links subjects to specific grades.
- `id`: Primary key, auto-incremented.
- `grade`: Grade level (e.g., "1", "10").
- `subject_id`: Foreign key referencing the `subject` table.

### `request_status` Table
Tracks substitute teacher requests from schools.
- `id`: Primary key, auto-incremented.
- `school_id`: Foreign key referencing the `school` table.
- `subject_id`: Foreign key referencing the `subject` table.
- `grade`: Grade for which the substitute teacher is needed.
- `request_date`: Date and time when the request was raised.
- `status`: The current status of the request (`Pending`, `Accepted`, `Rejected`, `Cancelled`).
- `assigned_teacher_id`: Foreign key referencing the `teacher` table (nullable).

### `request_notifications` Table
Stores notifications sent to teachers about substitute requests.
- `id`: Primary key, auto-incremented.
- `request_id`: Foreign key referencing the `request_status` table.
- `teacher_id`: Foreign key referencing the `teacher` table.
- `notification_status`: Status of the notification (`Pending`, `Accepted`, `Rejected`).
- `notification_date`: Date and time when the notification was sent.

### `recordings` Table
Stores recordings of classes taken by substitute teachers.
- `id`: Primary key, auto-incremented.
- `request_id`: Foreign key referencing the `request_status` table.
- `teacher_id`: Foreign key referencing the `teacher` table.
- `class_date`: Date when the class was conducted.
- `recording_link`: URL or path to the recording.

## Trigger: `auto_reject_request`

This trigger automatically rejects a request in the `request_status` table if all notified teachers have rejected it. The trigger fires after the `request_notifications` table is updated, checking if all teachers have rejected the request and updating the request status accordingly.

## How to Use

### Raising a Request
1. A school can raise a request by adding an entry in the `request_status` table.
2. The system will notify the available teachers about the request by inserting records into the `request_notifications` table.

### Teacher Notifications
1. Each teacher will be notified about the request. They can respond by updating their `notification_status` in the `request_notifications` table.
2. If all teachers reject the request, the system will automatically mark the request status as `Rejected`.

### Assigning Teachers
1. Once a teacher accepts a request, they can be assigned by updating the `assigned_teacher_id` in the `request_status` table.

### Storing Class Recordings
1. After the class is conducted, the recording link can be stored in the `recordings` table.

## Notes
- Ensure that foreign key constraints and triggers are properly configured in your MySQL setup for the schema to work as expected.
- The database schema is designed to be extensible and can be modified for further functionality (e.g., adding a payment system, tracking class performance, etc.).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
