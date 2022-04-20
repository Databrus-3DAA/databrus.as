CREATE DATABASE IF NOT EXISTS `databrus`;
USE `databrus`;

CREATE TABLE IF NOT EXISTS `machines` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(120) NOT NULL,
	`address` VARCHAR(120) NOT NULL,
	`description` VARCHAR(255) NOT NULL,
	`temperature` DECIMAL(3, 1) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `machine_items` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(60) NOT NULL DEFAULT 'databrus',
	`label` VARCHAR(60) NOT NULL DEFAULT 'Databrus',
	`pos` LONGTEXT NOT NULL DEFAULT '{"x":0,"y":"a"}',
	`price` DOUBLE NOT NULL DEFAULT 24,
	`stock` INT(11) NOT NULL DEFAULT 0,
	`machineId` INT(11) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`machineId`) REFERENCES `machines`(`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `order` (
	`id` VARCHAR(22) NOT NULL,
	`status` INT(3) NOT NULL DEFAULT 0,
	`order_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`deliver_date` DATETIME NOT NULL,
	`phone` VARCHAR(8) NOT NULL,
	`code` VARCHAR(5) NOT NULL,
	`product_name` VARCHAR(60) NOT NULL,
	`product_price` DOUBLE NOT NULL,
	`productId` INT(11) NOT NULL,
	`machineId` INT(11) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`productId`) REFERENCES `machine_items`(`id`) ON DELETE NULL,
	FOREIGN KEY (`machineId`) REFERENCES `machines`(`id`) ON DELETE NULL
);

CREATE TABLE IF NOT EXISTS `payments` (
	`orderId` VARCHAR(22) NOT NULL,
	`amount` DOUBLE NOT NULL,
	`status` VARCHAR(22) NOT NULL,
	`created` DATETIME NOT NULL,
	`updated` DATETIME NOT NULL,
	FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `logs` (
	`time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`orderId` VARCHAR(22),
	`message` LONGTEXT NOT NULL,
	`machineId` INT(11) NOT NULL,
	INDEX `time` (`time`),
	FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NULL,
	FOREIGN KEY (`machineId`) REFERENCES `machines`(`id`) ON DELETE NULL
);