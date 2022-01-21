CREATE DATABASE IF NOT EXISTS `databrus`;
USE `databrus`;

CREATE TABLE IF NOT EXISTS `machines` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(120) NOT NULL,
	`address` VARCHAR(120) NOT NULL,
	`description` VARCHAR(120) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO `machines` (`name`, `address`, `description`) VALUES
	('Malakoff VGS', 'Dyreveien 9, 1532 Moss', 'Inne på rom G280'),
	('Malakoff VGS', 'Dyreveien 9, 1532 Moss', 'Kantina');

CREATE TABLE IF NOT EXISTS `machine_items` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(60) NOT NULL DEFAULT 'databrus',
	`label` VARCHAR(60) NOT NULL DEFAULT 'Databrus',
	`pos` LONGTEXT NOT NULL DEFAULT '{"x":0,"y":0}',
	`price` INT NOT NULL DEFAULT 30,
	`stock` INT NOT NULL DEFAULT 0,
	`machineId` INT NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`machineId`) REFERENCES `machines`(`id`)
);

INSERT INTO `machine_items` (`name`, `label`, `pos`, `price`, `stock`, `machineId`) VALUES
	('cocaCola', 'Coca Cola','{"x":5,"y":"A"}', 24, 22, 1),
	('cocaCola', 'Coca Cola','{"x":0,"y":"D"}', 24, 22, 2);

CREATE USER IF NOT EXISTS 'databrus.as'@'%' IDENTIFIED BY 'rErar45iwIruz5XAViVeQ7dagumuro';
GRANT SELECT, INSERT, UPDATE, DELETE ON `databrus`.* TO 'databrus.as'@'%';
FLUSH PRIVILEGES;