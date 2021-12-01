CREATE DATABASE IF NOT EXISTS `databrus`;
USE `databrus`;

CREATE TABLE IF NOT EXISTS `machines` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(120) NOT NULL,
    `locationDesc` VARCHAR(120) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `machines` (`location`, `locationDesc`) VALUES
    ('Malakoff VGS (Dyreveien 9, 1532 Moss)', 'Inne på rom G280');

CREATE TABLE IF NOT EXISTS `machine_items` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL DEFAULT 'databrus',
    `label` VARCHAR(60) NOT NULL DEFAULT 'Databrus',
    `price` INT NOT NULL DEFAULT 30,
    `stock` LONGTEXT NOT NULL DEFAULT '{}',
    `machineId` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`machineId`) REFERENCES `machines`(`id`)
);

INSERT INTO `machine_items` (`name`, `label`, `price`, `stock`, `machineId`) VALUES
    ('cocaCola', 'Coca Cola', 24, '{"a": {"1":0,"5":2}}', 1);