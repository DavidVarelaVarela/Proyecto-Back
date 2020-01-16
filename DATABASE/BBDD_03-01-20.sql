-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: ses_database
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

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
  `quantity` int(11) DEFAULT  NULL,
  `idOrder` varchar(255) not  NULL,
  `idProduct` int(11) not  NULL,
  `price` double DEFAULT NULL,
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
  `rol` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`idEMPLOYEES`),
  UNIQUE KEY `idEMPLOYEES_UNIQUE` (`idEMPLOYEES`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPLOYEES`
--

LOCK TABLES `EMPLOYEES` WRITE;
/*!40000 ALTER TABLE `EMPLOYEES` DISABLE KEYS */;
INSERT INTO `EMPLOYEES` VALUES (1,'alberto','camarero'),(2,'chisco','camarero'),(3,'david','camarero');
/*!40000 ALTER TABLE `EMPLOYEES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ORDERS`
--

DROP TABLE IF EXISTS `ORDERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ORDERS` (
  `idOrders` varchar(255) NOT NULL,
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
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  UNIQUE KEY `idPRODUCTS_UNIQUE` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PRODUCTS`
--

LOCK TABLES `PRODUCTS` WRITE;
/*!40000 ALTER TABLE `PRODUCTS` DISABLE KEYS */;
INSERT INTO `PRODUCTS` VALUES (1,'Carne estofada','Estofado de carne con verduras al vapor servido en cazuela.','14','carne'),(2,'Ternera al horno','Deliciosa ternera troceada con acompañamiento de verduras salteadas.','16','carne'),(3,'Chuletas a la parrilla','Magníficas chuletas a la parrlla a fuego lento con un toque sublime de especias salvajes.','10','carne'),(4,'Cordero','Guiso de cordero en salsa de cebolla y apio.','12','carne'),(5,'Albondigas de buey','Deliciosas albóndigas de buey acompañadas de puré de patata y un toque de perejil.','18','carne'),(6,'Ensalada mediterránea','Espectacular ensalada de tomate,aguacate,pipas y pollo picante.','15','ensalada'),(7,'Ensalada sueca','Ensalada con salmón y delicioso aguacate fresco.','12','ensalada'),(8,'Ensalada otoño','Increible ensalada con productos de la estación triste.','12','ensalada'),(9,'Ensalada verano','Ensalada fresca y luminosa llena de frutas frescas y jugosas.','12','ensalada'),(10,'Spagueti  tintorato','Sabrosos spaguetti negro con gambas peladas frescas.','15','pasta'),(11,'Spagueti vegetale','ESpaguetis cocidos en agua vegetal .','15','pasta'),(12,'Minestrone de pasta','Jugoso plato de pasta minestrone con un toque de la casa','16','pasta'),(13,'Macarrones al fungi','Salteado de pasta con boletus de temporada','18','pasta'),(14,'Spaguetti a la vienesa','Spaguetti salteado con verduras y un toque de albahaca','16','pasta'),(15,'Spaguetti con carne','Spaguetti con carne picada especiada al gusto.','20','pasta'),(16,'Dorada','Dorada al horno con patatas cocidas y especias.','20','pescado'),(17,'Merluza','Merluza asada en confitura de albahaca y cebolla.','24','pescado'),(18,'Rape','Caldeirada de rape en salsa de setas','25','pescado'),(19,'Rodaballo','Lomos de rodaballo al horno acompañado de cerdo iberico y patatas','25','pescado'),(20,'Tarta de queso','Estupenda tarta de queso con galleta recubierto de canela fina','4','postre'),(21,'Tarta de vainilla','Tarta de vainilla con galleta triturada.','4','postre'),(22,'Tarta de limón y Iogurt','Deliciosa combinación de confitura de limón y Iogurt natural','4','postre'),(24,'Cerveza','Caña 33cl','3','bebida'),(25,'Vino','Botella 75cl','8','bebida'),(26,'Refresco','Botella 33cl','2','bebida'),(27,'Manhattan Cocktail','Mezcla de whiskey de centeno con vermut rojo y angostura ','5','bebida'),(28,'Mojito','Auténtico mojito cubano','5','bebida');
/*!40000 ALTER TABLE `PRODUCTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TABLES`
--

DROP TABLE IF EXISTS `TABLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TABLES` (
  `idTables` int(11) NOT NULL AUTO_INCREMENT,
  `idCustomers` int(11) DEFAULT NULL,
  `idEmployees` int(11) DEFAULT NULL,
  `idOrders` varchar(255) DEFAULT NULL,
  `help` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idTables`),
  KEY `fk_Customers_idx` (`idCustomers`),
  KEY `fk_EMPLOYEES_idx` (`idEmployees`),
  KEY `fk_ORDER_idx` (`idOrders`),
  CONSTRAINT `fk_CUSTOMERS` FOREIGN KEY (`idCustomers`) REFERENCES `CUSTOMERS` (`idCUSTOMERS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EMPLOYEES` FOREIGN KEY (`idEmployees`) REFERENCES `EMPLOYEES` (`idEMPLOYEES`) ON DELETE NO ACTION ON UPDATE NO ACTION,
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

-- Dump completed on 2019-12-21 17:10:04
