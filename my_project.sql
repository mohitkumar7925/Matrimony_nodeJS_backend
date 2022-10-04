-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 04, 2022 at 11:32 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `mother_name` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `age` int(10) NOT NULL,
  `dob` date NOT NULL,
  `denomination` varchar(100) NOT NULL,
  `division` varchar(100) NOT NULL,
  `mother_tongue` varchar(100) NOT NULL,
  `marital_status` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `citizenship` varchar(100) NOT NULL,
  `height` varchar(100) NOT NULL,
  `education` varchar(100) NOT NULL,
  `employed_in` varchar(100) NOT NULL,
  `occupation` varchar(100) NOT NULL,
  `salary` varchar(100) NOT NULL,
  `physical_status` varchar(100) NOT NULL,
  `family_status` varchar(100) NOT NULL,
  `family_type` varchar(100) NOT NULL,
  `religious_value` varchar(100) NOT NULL,
  `about_me` varchar(100) NOT NULL,
  `profile_pic` varchar(250) NOT NULL,
  `JWT` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `name`, `gender`, `father_name`, `mother_name`, `mobile`, `email`, `age`, `dob`, `denomination`, `division`, `mother_tongue`, `marital_status`, `city`, `state`, `country`, `citizenship`, `height`, `education`, `employed_in`, `occupation`, `salary`, `physical_status`, `family_status`, `family_type`, `religious_value`, `about_me`, `profile_pic`, `JWT`, `createdAt`, `updatedAt`) VALUES
(4, 'Mohan das', 'male', 'Nehru', 'Kanta', '8987586754', 'azaad@india.com', 59, '1947-08-14', 'Roman Catholic', 'Rajput', 'Hindi', 'married', 'chandigarh', 'haryana', 'India', 'Indian', '5ft3inch', 'Ph.D', 'Government', 'Krantikari', '100000', 'normal', 'middleclass', 'joint', 'very religious', 'sar kata sakte hai par sar jhuka sakte nahi', 'uri', NULL, '2022-09-29 05:19:42', '2022-09-29 05:19:42'),
(5, 'Mohan das', 'male', 'Nehru', 'Kanta', '8987586754', 'azaad@india.com', 59, '1947-08-14', 'Roman Catholic', 'Rajput', 'Hindi', 'married', 'chandigarh', 'haryana', 'India', 'Indian', '5ft3inch', 'Ph.D', 'Government', 'Krantikari', '100000', 'normal', 'middleclass', 'joint', 'very religious', 'sar kata sakte hai par sar jhuka sakte nahi', 'uri', NULL, '2022-09-29 12:27:17', '2022-09-29 12:27:17'),
(6, 'Mohan das', 'male', 'Nehru', 'Kanta', '8987586754', 'azaad@india.com', 59, '1947-08-14', 'Roman Catholic', 'Rajput', 'Hindi', 'married', 'chandigarh', 'haryana', 'India', 'Indian', '5ft3inch', 'Ph.D', 'Government', 'Krantikari', '100000', 'normal', 'middleclass', 'joint', 'very religious', 'sar kata sakte hai par sar jhuka sakte nahi', 'uri', NULL, '2022-09-30 05:24:05', '2022-09-30 05:24:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
