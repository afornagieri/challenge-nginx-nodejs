-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS Peoples;
 
-- Select the Peoples database
USE Peoples;
 
-- Create the Peoples table
CREATE TABLE IF NOT EXISTS peoples (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;