CREATE DATABASE IF NOT EXISTS company; 

USE company; 

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR (45) default null, 
    salary INT(11) default null,
    PRIMARY KEY (id) 
);

DESCRIBE employees;

INSERT INTO employees VALUES
       (1, "Ryan Ray", 20000), 
       (2, "Joe McMilan", 40000), 
       (3, "John Carter", 50000);


SELECT * FROM employees;