-- Exercício 1: 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais.
-- As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal.
-- Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	especie VARCHAR(30) NOT NULL,
	sexo VARCHAR(10) NOT NULL,
	idade INT NOT NULL,
	localizacao VARCHAR(45) NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE gerente (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE cuidador (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	gerente INT NOT NULL,
	FOREIGN KEY (gerente) REFERENCES gerente (id)
)
ENGINE = InnoDB;

CREATE TABLE animais_cuidadores (
	animal INT NOT NULL,
	cuidado_por INT NOT NULL,
    CONSTRAINT PRIMARY KEY (animal, cuidado_por),
    FOREIGN KEY (animal) REFERENCES animal (id),
    FOREIGN KEY (cuidado_por) REFERENCES cuidador (id)
)
ENGINE = InnoDB;