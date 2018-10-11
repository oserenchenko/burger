INSERT INTO burgers (burger_name)
VALUES ("Chicken Avacado Bacon"), ("Double Cheeseburger"), ("BBQ Cheddar Bacon");


SELECT * FROM burgers;

INSERT INTO burgers (burger_name) VALUES ("testing");

UPDATE burgers SET devoured = true WHERE id = 1;