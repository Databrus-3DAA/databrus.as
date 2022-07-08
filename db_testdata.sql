INSERT INTO `machines` (`name`, `address`, `description`, `temperature`) VALUES
	('Malakoff VGS', 'Dyreveien 9, 1532 Moss', 'Inne på rom G280', 22.5);

INSERT INTO `machine_items` (`name`, `label`, `pos`, `price`, `stock`, `machineId`) VALUES
	('cocaCola', 'Coca Cola','{"x":5,"y":"A"}',  24, 22, 1),
	('cocaCola', 'Coca Cola','{"x":0,"y":"D"}',  24, 22, 1);