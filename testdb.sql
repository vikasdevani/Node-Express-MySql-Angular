-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2022 at 08:01 AM
-- Server version: 5.7.31
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `createdAt`, `updatedAt`) VALUES
(15, 'Hyundai Creta', '500000', 'http://localhost:8080/uploads/b38f79ada1f5aeb483d41039feaf6fe21653108210014.hyundai-creta-right-front-three-quarter9.jpeg', '2022-05-21 04:43:30', '2022-05-21 04:43:30'),
(16, 'Hyundai Venue', '100000', 'http://localhost:8080/uploads/f2d7dcecd5c26dba26be6222b8ba4ab61653108493798.venue-exterior-right-front-three-quarter-2.jpeg', '2022-05-21 04:48:13', '2022-05-21 04:48:13'),
(17, 'Tata Nexon', '800000', 'http://localhost:8080/uploads/94b98ec4c57b0fee5352049720810e671653108508477.tata-nexon-right-front-three-quarter3.jpeg', '2022-05-21 04:48:28', '2022-05-21 04:48:28'),
(18, 'Maruti Suzuki Swift', '400000', 'http://localhost:8080/uploads/ecac52117b9e26c5ed4f7600b9dd2faa1653108801533.exterior-right-front-three-quarter-10.jpeg', '2022-05-21 04:53:21', '2022-05-21 04:53:21'),
(19, 'Hyundai Grand i10 Nios', '125000', 'http://localhost:8080/uploads/39a30b630ce970e233c741a8770b9b2f1653109864149.grand-i10-nios-exterior-right-front-three-quarter-2.jpeg', '2022-05-21 05:11:04', '2022-05-21 05:11:04'),
(20, 'Mahindra XUV700', '450000', 'http://localhost:8080/uploads/b31de9e8decdb4d62aef8b000514e7651653109888934.xuv700-exterior-right-front-three-quarter.jpeg', '2022-05-21 05:11:28', '2022-05-21 05:11:28'),
(21, 'Renault Kiger', '780000', 'http://localhost:8080/uploads/ac34951c81db449a245a5c76d6a2cfab1653109912423.kiger-exterior-right-front-three-quarter-4.jpeg', '2022-05-21 05:11:52', '2022-05-21 05:11:52'),
(22, 'Hyundai i20', '450000', 'http://localhost:8080/uploads/026d574216d0b8a5e97145bfe0087b3d1653109935369.i20-exterior-right-front-three-quarter-5.jpeg', '2022-05-21 05:12:15', '2022-05-21 05:12:15'),
(23, 'Maruti Suzuki Baleno', '710000', 'http://localhost:8080/uploads/f98099bcd3235f3b537ae1365009cced1653110051712.baleno-exterior-right-front-three-quarter-2.jpeg', '2022-05-21 05:14:11', '2022-05-21 05:14:11'),
(24, 'Tata Altroz', '7879798', 'http://localhost:8080/uploads/cf7980e94674b0c52a048fb161dbe1661653110633434.altroz-exterior-right-front-three-quarter-79.jpeg', '2022-05-21 05:23:53', '2022-05-21 05:23:53'),
(25, 'Maruti Suzuki Wagon R', '410000', 'http://localhost:8080/uploads/12441d080a0107c12ecdb36a0cbad0e01653110655825.wagon-r-2022-exterior-right-front-three-quarter.jpeg', '2022-05-21 05:24:15', '2022-05-21 05:24:15'),
(26, 'Kia Carens', '350000', 'http://localhost:8080/uploads/6bff1aa784c9704aa8b8eafc528fae2b1653110765019.exterior-right-front-three-quarter.jpeg', '2022-05-21 05:26:05', '2022-05-21 05:26:05'),
(27, 'Tata Punch', '230000', 'http://localhost:8080/uploads/b475349e6eea4619e8823ef77a0fbf7b1653110790287.punch-exterior-right-front-three-quarter-2.jpeg', '2022-05-21 05:26:30', '2022-05-21 05:26:30'),
(28, 'Maruti Suzuki Ertiga', '900000', 'http://localhost:8080/uploads/984b1a23d52892391833df2145c368391653110819894.2022-ertiga-exterior-right-front-three-quarter-3.jpg', '2022-05-21 05:27:00', '2022-05-21 05:27:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
