
CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);
