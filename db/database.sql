CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);
SHOW tables;
DESCRIBE employee;

INSERT INTO employee VALUES 
    (1,'Joe',1000),
    (2,'John',2000),
    (3,'Henry',2000),
    (4,'Sam', 1400),
    (5,'Max', 5000);