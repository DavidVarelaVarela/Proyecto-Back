-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: ses-database
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `BILL`
--

DROP TABLE IF EXISTS `BILL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BILL` (
  `quantity` int(11) DEFAULT NULL,
  `idOrder` int(11) DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  KEY `fk_ORDER_idx` (`idOrder`),
  KEY `fk_PRODUCT_idx` (`idProduct`),
  CONSTRAINT `fk_ORDERS` FOREIGN KEY (`idOrder`) REFERENCES `ORDERS` (`idOrders`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUCTS` FOREIGN KEY (`idProduct`) REFERENCES `PRODUCTS` (`idProduct`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BILL`
--

LOCK TABLES `BILL` WRITE;
/*!40000 ALTER TABLE `BILL` DISABLE KEYS */;
/*!40000 ALTER TABLE `BILL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CUSTOMERS`
--

DROP TABLE IF EXISTS `CUSTOMERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CUSTOMERS` (
  `idCUSTOMERS` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCUSTOMERS`),
  UNIQUE KEY `idCUSTOMERS_UNIQUE` (`idCUSTOMERS`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CUSTOMERS`
--

LOCK TABLES `CUSTOMERS` WRITE;
/*!40000 ALTER TABLE `CUSTOMERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `CUSTOMERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EMPLOYEES`
--

DROP TABLE IF EXISTS `EMPLOYEES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EMPLOYEES` (
  `idEMPLOYEES` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idEMPLOYEES`),
  UNIQUE KEY `idEMPLOYEES_UNIQUE` (`idEMPLOYEES`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPLOYEES`
--

LOCK TABLES `EMPLOYEES` WRITE;
/*!40000 ALTER TABLE `EMPLOYEES` DISABLE KEYS */;
/*!40000 ALTER TABLE `EMPLOYEES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ORDERS`
--

DROP TABLE IF EXISTS `ORDERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ORDERS` (
  `idOrders` int(11) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `inicialTime` date DEFAULT NULL,
  `deliveryTime` date DEFAULT NULL,
  `durationTime` date DEFAULT NULL,
  `rating` double DEFAULT NULL,
  `totalPrice` double DEFAULT NULL,
  PRIMARY KEY (`idOrders`),
  UNIQUE KEY `idOrders_UNIQUE` (`idOrders`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ORDERS`
--

LOCK TABLES `ORDERS` WRITE;
/*!40000 ALTER TABLE `ORDERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `ORDERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PRODUCTS`
--

DROP TABLE IF EXISTS `PRODUCTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PRODUCTS` (
  `idProduct` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  UNIQUE KEY `idPRODUCTS_UNIQUE` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PRODUCTS`
--

LOCK TABLES `PRODUCTS` WRITE;
/*!40000 ALTER TABLE `PRODUCTS` DISABLE KEYS */;
/*!40000 ALTER TABLE `PRODUCTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TABLES`
--

DROP TABLE IF EXISTS `TABLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TABLES` (
  `idTables` int(11) NOT NULL,
  `idCustomers` int(11) DEFAULT NULL,
  `idEnployees` int(11) DEFAULT NULL,
  `idOrders` int(11) DEFAULT NULL,
  PRIMARY KEY (`idTables`),
  KEY `fk_Customers_idx` (`idCustomers`),
  KEY `fk_EMPLOYEES_idx` (`idEnployees`),
  KEY `fk_ORDER_idx` (`idOrders`),
  CONSTRAINT `fk_CUSTOMERS` FOREIGN KEY (`idCustomers`) REFERENCES `CUSTOMERS` (`idCUSTOMERS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EMPLOYEES` FOREIGN KEY (`idEnployees`) REFERENCES `EMPLOYEES` (`idEMPLOYEES`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ORDER` FOREIGN KEY (`idOrders`) REFERENCES `ORDERS` (`idOrders`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TABLES`
--

LOCK TABLES `TABLES` WRITE;
/*!40000 ALTER TABLE `TABLES` DISABLE KEYS */;
/*!40000 ALTER TABLE `TABLES` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-02 19:55:50
