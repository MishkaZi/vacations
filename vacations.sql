-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: localhost    Database: vacations
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `followed_vacations`
--

DROP TABLE IF EXISTS `followed_vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followed_vacations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `vacation_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `user_id` (`user_id`),
  KEY `vacation_id` (`vacation_id`),
  CONSTRAINT `followed_vacations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `followed_vacations_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followed_vacations`
--

LOCK TABLES `followed_vacations` WRITE;
/*!40000 ALTER TABLE `followed_vacations` DISABLE KEYS */;
INSERT INTO `followed_vacations` VALUES (4,10,5),(8,10,6),(9,8,3),(10,8,4),(11,8,5),(12,8,6),(13,7,5),(14,7,4),(15,7,3),(16,7,6),(116,3,10),(117,10,10),(118,10,9),(119,3,6),(121,3,3);
/*!40000 ALTER TABLE `followed_vacations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `is_admin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'rasha@misha.misha','1d8a06de680473f864e02a9959bf2aad','sfa','fafs',0),(4,'lasha@tisha.misha','1d8a06de680473f864e02a9959bf2aad','safaf','asfadf',0),(7,'natasha@misha.misha','1d8a06de680473f864e02a9959bf2aad','misha','zino',0),(8,'tisha@misha.misha','1d8a06de680473f864e02a9959bf2aad','misha','zino',0),(9,'tasha@misha.misha','1d8a06de680473f864e02a9959bf2aad','misha','zino',0),(10,'kasha@misha.misha','1d8a06de680473f864e02a9959bf2aad','misha','zino',0),(11,'user@passport.com','1d8a06de680473f864e02a9959bf2aad','sfasfa','qsasfasdfsd',1),(12,'test@test.com','1d8a06de680473f864e02a9959bf2aad','Test','Test',0),(13,'test1@test.com','1d8a06de680473f864e02a9959bf2aad','Test1','Test1',0),(14,'test2@test.com','1d8a06de680473f864e02a9959bf2aad','test2','test2',0),(15,'test3@test.com','1d8a06de680473f864e02a9959bf2aad','Test3','Test3',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(2000) NOT NULL,
  `destination` varchar(45) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `departure_date` varchar(45) NOT NULL,
  `arrival_date` varchar(45) NOT NULL,
  `price` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (3,'Curabitur sit amet risus dolor. Sed quis posuere diam. Sed vitae velit turpis. Mauris eu tempus nulla. Donec sodales est quis ligula tristique pellentesque. Phasellus in lectus sed nisl convallis imperdiet in ac mauris. Vivamus consequat tortor nibh, sit amet efficitur risus lobortis non. Donec faucibus condimentum interdum. Ut egestas nisl purus, in molestie sem consequat at. Phasellus nec nisl eu quam eleifend porta dictum vel lacus. Suspendisse non elementum quam. Nulla facilisi. Mauris non arcu velit. Phasellus ullamcorper viverra libero, vel tempus arcu euismod eget. Quisque id porta tortor. Praesent posuere elementum sem vitae eleifend.','Moldovaaa','https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80','2021-07-14','2021-07-22',1000),(4,'Vivamus consequat tortor nibh, sit amet efficitur risus lobortis non. Donec faucibus condimentum interdum. Ut egestas nisl purus, in molestie sem consequat at. Phasellus nec nisl eu quam eleifend porta dictum vel lacus. Suspendisse non elementum quam. Nulla facilisi. Mauris non arcu velit. Phasellus ullamcorper viverra libero, vel tempus arcu euismod eget. Quisque id porta tortor. Praesent posuere elementum sem vitae eleifend.','Montenegro','https://images.unsplash.com/photo-1609788077750-8cad3315eead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80','2020/10/20','2030/10/00',1000),(5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in rutrum arcu, id tristique nibh. Donec eu est dictum, maximus erat ut, tincidunt nisi. Donec id nisi nisi. Aenean bibendum neque dolor, a sodales felis pellentesque a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nulla felis, finibus quis volutpat malesuada, tincidunt tincidunt neque. Donec eleifend sed lectus in tincidunt. Vestibulum porttitor, urna sed fermentum sodales, sapien est accumsan sem, ut viverra sapien urna at ligula.','israel','https://images.unsplash.com/photo-1602170392238-210f4b214776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80','20.10.2021','30.10.2021',500),(6,'perdiet in ac mauris. Vivamus consequat tortor nibh, sit amet efficitur risus lobortis non. Donec faucibus condimentum interdum. Ut egestas nisl purus, in molestie sem consequat at. Phasellus nec nisl eu quam eleifend porta dictum vel lacus. Suspendisse non elementum quam. Nulla facilisi. Mauris non arcu velit. Phasellus ullamcorper viverra libero, vel tempus arcu euismod eget. Quisque id porta tortor. Praesent posuere elementum sem vitae eleifend.','portugal','https://images.unsplash.com/photo-1594822530787-629c38ba7887?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1672&q=80','20.10.2021','30.10.2021',1000),(9,'Phasellus laoreet tincidunt efficitur. Donec et ipsum a nibh imperdiet sagittis ut a ante. Proin quis dolor nibh. Pellentesque congue rutrum quam, eget faucibus libero mattis vel.','Uruguay','https://images.unsplash.com/photo-1616959313137-186688889054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80','2021-07-07','2021-07-15',888),(10,'Phasellus laoreet tincidunt efficitur. Donec et ipsum a nibh imperdiet sagittis ut a ante. Proin quis dolor nibh. Pellentesque congue rutrum quam, eget faucibus libero mattis vel.','Porto Del Mundo','https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80','2021-07-22','2021-07-22',2341);
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-10 17:16:06
