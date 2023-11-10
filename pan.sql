DROP DATABASE IF EXISTS pan_db;
CREATE DATABASE pan_db;

USE pan_db;

CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO categories (name) VALUES ('Panadería'),('Facturería');


CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL
);
INSERT INTO products (name, category_id, price, description) VALUES ('Pan 1', 1, 100, 'Descripción 1'),('Pan 2', 1, 200, 'Descripción 2'),('Pan 3', 1, 200, 'Descripción 3'),('Pan 4', 1, 200, 'Descripción 4'),('Pan 5', 2, 200, 'Descripción 5');