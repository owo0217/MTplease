-- MySQL dump 10.13  Distrib 5.6.19, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: MTPlease
-- ------------------------------------------------------
-- Server version	5.6.19-0ubuntu0.14.04.1

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
-- Table structure for table `pensions`
--

DROP TABLE IF EXISTS `pensions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pensions` (
  `pen_region` enum('대성리','청평','가평') COLLATE utf8_unicode_ci NOT NULL,
  `pen_name` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `pen_homepage` char(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_lot_adr` char(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_road_adr` char(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_ceo` char(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_phone1` char(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_phone2` char(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_checkin` time DEFAULT NULL,
  `pen_checkout` time DEFAULT NULL,
  `pen_check_caution` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_pickup` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_bbq` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_ground_existence` int(11) DEFAULT NULL,
  `pen_ground_description` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_etc_facility` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_valley_description` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pen_caution` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`pen_region`,`pen_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pensions`
--

LOCK TABLES `pensions` WRITE;
/*!40000 ALTER TABLE `pensions` DISABLE KEYS */;
/*!40000 ALTER TABLE `pensions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pensions_peak_periods`
--

DROP TABLE IF EXISTS `pensions_peak_periods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pensions_peak_periods` (
  `pen_region` enum('대성리','청평','가평') COLLATE utf8_unicode_ci NOT NULL,
  `pen_name` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `pen_period_division` enum('준성수기','성수기','극성수기') COLLATE utf8_unicode_ci DEFAULT NULL,
  `period_start` date DEFAULT NULL,
  `period_end` date DEFAULT NULL,
  PRIMARY KEY (`pen_region`,`pen_name`),
  CONSTRAINT `fk_1` FOREIGN KEY (`pen_region`, `pen_name`) REFERENCES `pensions` (`pen_region`, `pen_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pensions_peak_periods`
--

LOCK TABLES `pensions_peak_periods` WRITE;
/*!40000 ALTER TABLE `pensions_peak_periods` DISABLE KEYS */;
/*!40000 ALTER TABLE `pensions_peak_periods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rooms` (
  `pen_region` enum('대성리','청평','가평') COLLATE utf8_unicode_ci NOT NULL,
  `pen_name` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `room_name` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `std_num_people` int(11) DEFAULT NULL,
  `max_num_people` int(11) DEFAULT NULL,
  `pyeong` int(11) DEFAULT NULL,
  `num_room` int(11) DEFAULT NULL,
  `num_kitchen` int(11) DEFAULT NULL,
  `air_existence` tinyint(1) DEFAULT NULL,
  `etc` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`pen_region`,`pen_name`,`room_name`),
  CONSTRAINT `fk_2` FOREIGN KEY (`pen_region`, `pen_name`) REFERENCES `pensions` (`pen_region`, `pen_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms_costs`
--

DROP TABLE IF EXISTS `rooms_costs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rooms_costs` (
  `pen_region` enum('대성리','청평','가평') COLLATE utf8_unicode_ci NOT NULL,
  `pen_name` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `room_name` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `pen_period_division` enum('비수기','준성수기','성수기','극성수기') COLLATE utf8_unicode_ci DEFAULT NULL,
  `weekdays` int(11) DEFAULT NULL,
  `friday` int(11) DEFAULT NULL,
  `weekends` int(11) DEFAULT NULL,
  PRIMARY KEY (`pen_region`,`pen_name`,`room_name`),
  CONSTRAINT `fk_3` FOREIGN KEY (`pen_region`, `pen_name`, `room_name`) REFERENCES `rooms` (`pen_region`, `pen_name`, `room_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms_costs`
--

LOCK TABLES `rooms_costs` WRITE;
/*!40000 ALTER TABLE `rooms_costs` DISABLE KEYS */;
/*!40000 ALTER TABLE `rooms_costs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-09-30  1:43:04
