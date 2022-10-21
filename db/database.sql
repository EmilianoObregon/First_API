SHOW databases;

CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
	id INT(11) NOT NULL auto_increment,
    name VARCHAR(25) DEFAULT NULL,
    salary INT(11)DEFAULT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE task(
	id INT(11) NOT NULL auto_increment,
    name VARCHAR(30) default null,
    description varchar(255) default null
);

SHOW tables;
DESCRIBE employee;


    INSERT INTO employee VALUES
        ('Emiliano', 2000),
        ('Tom', 3000),
        ('Jane', 2120),
        ('Julia', 3240),
        ('Dafne', 5630);
