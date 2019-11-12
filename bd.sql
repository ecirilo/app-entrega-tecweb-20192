-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: entrega
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `destinatarios`
--

DROP TABLE IF EXISTS `destinatarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destinatarios` (
  `iddestinatario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(450) DEFAULT NULL,
  `idenvio` int(11) NOT NULL,
  PRIMARY KEY (`iddestinatario`),
  KEY `idenvio_idx` (`idenvio`),
  CONSTRAINT `envio` FOREIGN KEY (`idenvio`) REFERENCES `envios` (`idenvio`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destinatarios`
--

LOCK TABLES `destinatarios` WRITE;
/*!40000 ALTER TABLE `destinatarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `destinatarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entregadores`
--

DROP TABLE IF EXISTS `entregadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregadores` (
  `identregador` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(450) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `veiculo` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`identregador`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregadores`
--

LOCK TABLES `entregadores` WRITE;
/*!40000 ALTER TABLE `entregadores` DISABLE KEYS */;
INSERT INTO `entregadores` VALUES (2,'Diego Silva','11122233344','Fusca - YYY3435'),(3,'Julio','11122233355','Bike - YYY3435');
/*!40000 ALTER TABLE `entregadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `envios`
--

DROP TABLE IF EXISTS `envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `envios` (
  `idenvio` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(1500) NOT NULL,
  `foto` varchar(450) NOT NULL,
  `entregou` tinyint(1) DEFAULT NULL,
  `idremetente` int(11) DEFAULT NULL,
  `idviagem` int(11) DEFAULT NULL,
  `avaliacao` int(1) DEFAULT NULL,
  PRIMARY KEY (`idenvio`),
  KEY `envio_remetente_idx` (`idremetente`),
  KEY `envio_viagem_idx` (`idviagem`),
  CONSTRAINT `envio_remetente` FOREIGN KEY (`idremetente`) REFERENCES `remetentes` (`idremetente`),
  CONSTRAINT `envio_viagem` FOREIGN KEY (`idviagem`) REFERENCES `viagens` (`idviagem`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `envios`
--

LOCK TABLES `envios` WRITE;
/*!40000 ALTER TABLE `envios` DISABLE KEYS */;
INSERT INTO `envios` VALUES (1,'iPhone',' ',1,1,1,5),(2,'Biscoito',' ',1,1,2,2);
/*!40000 ALTER TABLE `envios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `local_retiradas`
--

DROP TABLE IF EXISTS `local_retiradas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `local_retiradas` (
  `idlocalretirada` int(11) NOT NULL AUTO_INCREMENT,
  `rua` varchar(450) NOT NULL,
  `bairro` varchar(450) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `idenvio` int(11) NOT NULL,
  PRIMARY KEY (`idlocalretirada`),
  KEY `envio_local_entrega_idx` (`idenvio`),
  CONSTRAINT `envio_local_retirada` FOREIGN KEY (`idenvio`) REFERENCES `envios` (`idenvio`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `local_retiradas`
--

LOCK TABLES `local_retiradas` WRITE;
/*!40000 ALTER TABLE `local_retiradas` DISABLE KEYS */;
/*!40000 ALTER TABLE `local_retiradas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remetentes`
--

DROP TABLE IF EXISTS `remetentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `remetentes` (
  `idremetente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(450) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `foto` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`idremetente`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remetentes`
--

LOCK TABLES `remetentes` WRITE;
/*!40000 ALTER TABLE `remetentes` DISABLE KEYS */;
INSERT INTO `remetentes` VALUES (1,'Elder Cirilo','11111111111',NULL);
/*!40000 ALTER TABLE `remetentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viagens`
--

DROP TABLE IF EXISTS `viagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viagens` (
  `idviagem` int(11) NOT NULL AUTO_INCREMENT,
  `origem` varchar(450) NOT NULL,
  `destino` varchar(450) NOT NULL,
  `valor` decimal(5,0) NOT NULL,
  `identregador` int(11) DEFAULT NULL,
  PRIMARY KEY (`idviagem`),
  KEY `viagem_entregador_idx` (`identregador`),
  CONSTRAINT `viagem_entregador` FOREIGN KEY (`identregador`) REFERENCES `entregadores` (`identregador`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viagens`
--

LOCK TABLES `viagens` WRITE;
/*!40000 ALTER TABLE `viagens` DISABLE KEYS */;
INSERT INTO `viagens` VALUES (1,'São João del-rei','Belo Horizonte',50,2),(2,'São João del-rei','Rio de Janeiro',150,2),(4,'caratinga','ipatinga',100,2),(5,'São João','São Paulo',200,NULL),(6,'Rio de Janeiro','São Paulo',300,NULL),(8,'São João','Ouro Preto',200,NULL),(9,'Belo Horizonte','Macapa',100,NULL),(10,'Belo Horizonte','Fortaleza',100,NULL),(12,'São João','Lavras Novas',80,NULL),(13,'São João','Campo Grande',700,NULL);
/*!40000 ALTER TABLE `viagens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-12 11:04:54
