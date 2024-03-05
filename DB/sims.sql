-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2024 at 06:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sims`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(30) NOT NULL,
  `company_phoneno` varchar(30) NOT NULL,
  `company_email` varchar(30) NOT NULL,
  `company_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_phoneno`, `company_email`, `company_password`) VALUES
(23, 'google', '1231231231', 'google123@gmail.com', 'google123');

-- --------------------------------------------------------

--
-- Table structure for table `company_location`
--

CREATE TABLE `company_location` (
  `company_id` int(11) NOT NULL,
  `company_location` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company_location`
--

INSERT INTO `company_location` (`company_id`, `company_location`) VALUES
(23, 'india'),
(23, 'rassiua'),
(23, 'uk'),
(23, 'us');

-- --------------------------------------------------------

--
-- Table structure for table `company_offers_internship`
--

CREATE TABLE `company_offers_internship` (
  `company_id` int(11) NOT NULL,
  `internship_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company_offers_internship`
--

INSERT INTO `company_offers_internship` (`company_id`, `internship_id`) VALUES
(23, 28),
(23, 29);

-- --------------------------------------------------------

--
-- Table structure for table `internship`
--

CREATE TABLE `internship` (
  `internship_id` int(11) NOT NULL,
  `internship_title` varchar(30) NOT NULL,
  `internship_desc` varchar(100) NOT NULL,
  `internship_startdate` date NOT NULL,
  `internship_enddate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `internship`
--

INSERT INTO `internship` (`internship_id`, `internship_title`, `internship_desc`, `internship_startdate`, `internship_enddate`) VALUES
(28, 'about dbms', 'data base management system', '2024-03-21', '2024-03-30'),
(29, 'Complete Mern Roadmap', 'roadmap of mern with google ', '2024-03-06', '2024-04-06');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(30) NOT NULL,
  `student_usn` varchar(30) NOT NULL,
  `student_gender` varchar(30) NOT NULL,
  `student_phoneno` int(30) NOT NULL,
  `student_email` varchar(30) NOT NULL,
  `student_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_name`, `student_usn`, `student_gender`, `student_phoneno`, `student_email`, `student_password`) VALUES
(13, 'aasim', '407', 'Male', 1231231231, 'aasim407@gmail.com', 'aasim407'),
(14, 'ahmed', '69', 'Male', 69696969, 'ahmed69@gmail.com', 'ahmed69');

-- --------------------------------------------------------

--
-- Table structure for table `student_take_internship`
--

CREATE TABLE `student_take_internship` (
  `student_id` int(11) NOT NULL,
  `internship_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_take_internship`
--

INSERT INTO `student_take_internship` (`student_id`, `internship_id`) VALUES
(13, 28),
(13, 29),
(14, 28),
(14, 29);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `company_location`
--
ALTER TABLE `company_location`
  ADD PRIMARY KEY (`company_location`),
  ADD KEY `company_id_fk` (`company_id`);

--
-- Indexes for table `company_offers_internship`
--
ALTER TABLE `company_offers_internship`
  ADD PRIMARY KEY (`company_id`,`internship_id`),
  ADD KEY `internship_id` (`internship_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `internship`
--
ALTER TABLE `internship`
  ADD PRIMARY KEY (`internship_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `student_take_internship`
--
ALTER TABLE `student_take_internship`
  ADD PRIMARY KEY (`student_id`,`internship_id`),
  ADD KEY `internship_id` (`internship_id`),
  ADD KEY `student_id` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `internship`
--
ALTER TABLE `internship`
  MODIFY `internship_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company_location`
--
ALTER TABLE `company_location`
  ADD CONSTRAINT `company_location_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_offers_internship`
--
ALTER TABLE `company_offers_internship`
  ADD CONSTRAINT `company_offers_internship_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_offers_internship_ibfk_2` FOREIGN KEY (`internship_id`) REFERENCES `internship` (`internship_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_take_internship`
--
ALTER TABLE `student_take_internship`
  ADD CONSTRAINT `student_take_internship_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_take_internship_ibfk_2` FOREIGN KEY (`internship_id`) REFERENCES `internship` (`internship_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
