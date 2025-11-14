CREATE DATABASE tutorial;

USE tutorial;

CREATE TABLE categorie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descrizione TEXT,
    stato VARCHAR(50) DEFAULT 'attiva'
);

INSERT INTO categorie (nome, descrizione, stato)
VALUES ('abbigliamento', 'sot cazzo', 'attiva');

SELECT * FROM categorie;

SELECT id, nome FROM categorie;

SELECT id, nome FROM categorie WHERE id = 3;

