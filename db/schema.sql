CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT,
    burger_name STRING(30),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);
