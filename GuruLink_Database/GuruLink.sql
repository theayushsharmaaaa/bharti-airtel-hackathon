-- Active: 1732208256773@@127.0.0.1@3306@bharti_hackathon
-- Disable foreign key checks
SET FOREIGN_KEY_CHECKS = 0;

-- Drop all tables
DROP TABLE IF EXISTS recordings;
DROP TABLE IF EXISTS request_notifications;
DROP TABLE IF EXISTS request_status;
DROP TABLE IF EXISTS grade_subjects;
DROP TABLE IF EXISTS subject;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS school;
DROP TABLE IF EXISTS request_status;

-- Enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- Table: school
CREATE TABLE school (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    working_hours VARCHAR(255),
    contact_info VARCHAR(255)
);

-- Table: teacher
CREATE TABLE teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    qualifications TEXT,
    experience INT,
    grades_taught VARCHAR(255),
    availability BOOLEAN DEFAULT TRUE,
    availability_time_slots TEXT,
    contact_info VARCHAR(255)
);

-- Table: subject
CREATE TABLE subject (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Table: grade_subjects
CREATE TABLE grade_subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grade VARCHAR(10) NOT NULL,
    subject_id INT NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES subject(id) ON DELETE CASCADE
);

-- Table: request_status
CREATE TABLE request_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    subject_id INT NOT NULL,
    grade VARCHAR(10) NOT NULL,
    request_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Accepted', 'Rejected', 'Cancelled') DEFAULT 'Pending',
    assigned_teacher_id INT,
    FOREIGN KEY (school_id) REFERENCES school(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subject(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_teacher_id) REFERENCES teacher(id) ON DELETE SET NULL
);

-- Table: request_notifications
CREATE TABLE request_notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT NOT NULL,
    teacher_id INT NOT NULL,
    notification_status ENUM('Pending', 'Accepted', 'Rejected') DEFAULT 'Pending',
    notification_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (request_id) REFERENCES request_status(id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id) ON DELETE CASCADE
);

-- Table: recordings
CREATE TABLE recordings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT NOT NULL,
    teacher_id INT NOT NULL,
    class_date DATE NOT NULL,
    recording_link TEXT,
    FOREIGN KEY (request_id) REFERENCES request_status(id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id) ON DELETE CASCADE
);

-- Trigger to automatically reject a request if all notified teachers reject it
DELIMITER $$

CREATE TRIGGER auto_reject_request
AFTER UPDATE ON request_notifications
FOR EACH ROW
BEGIN
    DECLARE all_rejected BOOLEAN;

    IF NEW.notification_status = 'Rejected' THEN
        -- Check if all notifications for this request are rejected
        SELECT NOT EXISTS (
            SELECT 1 
            FROM request_notifications 
            WHERE request_id = NEW.request_id AND notification_status != 'Rejected'
        ) INTO all_rejected;

        -- If all are rejected, update the request status
        IF all_rejected THEN
            UPDATE request_status
            SET status = 'Rejected'
            WHERE id = NEW.request_id;
        END IF;
    END IF;
END$$

DELIMITER ;
