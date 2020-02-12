DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);
