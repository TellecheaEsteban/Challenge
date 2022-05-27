-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 11:44 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alkemy_db`
--
CREATE DATABASE IF NOT EXISTS `alkemy_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `alkemy_db`;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--
-- Creation: May 19, 2022 at 10:31 PM
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `concept` varchar(255) NOT NULL,
  `amount` decimal(6,2) NOT NULL,
  `date` date NOT NULL,
  `type_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `concept`, `amount`, `date`, `type_id`, `cat_id`, `user_id`) VALUES
(1, 'Viaje en Remis', '100.00', '2022-05-24', 2, 4, 1),
(2, 'Pedido de comida', '750.00', '2022-05-17', 2, 1, 2),
(5, 'CocaCola', '175.00', '2022-05-16', 2, 1, 1),
(7, 'Vacaciones', '2500.00', '2022-05-30', 2, 8, 1),
(8, 'Sueldo', '8000.00', '2022-05-25', 1, 6, 1),
(9, 'Compra Supermercado', '800.00', '2022-05-25', 2, 5, 1),
(10, 'Aguinaldo', '4500.00', '2022-05-30', 1, 6, 1),
(11, 'Compra de juegos', '270.00', '2022-05-19', 2, 3, 1),
(12, 'Celular', '231.00', '2022-05-24', 2, 2, 1),
(13, 'Nafta', '2000.00', '2022-05-24', 2, 4, 1),
(14, 'Seguro del auto', '1005.00', '2022-05-24', 2, 8, 1),
(15, 'Pago de Luz', '221.00', '2022-05-25', 2, 2, 1),
(16, 'Pago de Luz', '221.00', '2022-05-25', 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_category`
--
-- Creation: May 19, 2022 at 10:26 PM
--

DROP TABLE IF EXISTS `transaction_category`;
CREATE TABLE `transaction_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction_category`
--

INSERT INTO `transaction_category` (`id`, `name`) VALUES
(1, 'Comida'),
(2, 'Servicios'),
(3, 'Hobbies'),
(4, 'Transporte'),
(5, 'Tarjetas de credito'),
(6, 'Sueldo'),
(7, 'Venta'),
(8, 'Otros');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_type`
--
-- Creation: May 19, 2022 at 10:23 PM
--

DROP TABLE IF EXISTS `transaction_type`;
CREATE TABLE `transaction_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction_type`
--

INSERT INTO `transaction_type` (`id`, `name`) VALUES
(1, 'Ingreso'),
(2, 'Egreso');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Creation: May 19, 2022 at 08:47 PM
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Esteban Manuel', 'tellecheaestebanm@gmail.com', 'ppppppppp'),
(2, 'Juan Perez', 'juanp@gmail.com', 'ppppppppp'),
(3, 'Guagalupe', 'guadalupe@gmail.com', 'gggggg'),
(4, 'Elon', 'elon@hotmail.com', 'musk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `cat_id` (`cat_id`),
  ADD KEY `tipo_id` (`type_id`);

--
-- Indexes for table `transaction_category`
--
ALTER TABLE `transaction_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction_type`
--
ALTER TABLE `transaction_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `transaction_category`
--
ALTER TABLE `transaction_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `transaction_type`
--
ALTER TABLE `transaction_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `cat_id` FOREIGN KEY (`cat_id`) REFERENCES `transaction_category` (`id`),
  ADD CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `transaction_type` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
