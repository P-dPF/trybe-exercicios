# Exerício 3: 🚀 Monte uma query que:
# - Crie um banco de dados chamado normalization;
# - Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
# - Popule todas as tabelas com os dados fornecidos nos exercícios.

DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE
funcionarios(
	Funcionario_id INT NOT NULL PRIMARY KEY,
    Nome VARCHAR(45) NOT NULL,
    Sobrenome VARCHAR(45) NOT NULL,
    Email VARCHAR(45) NOT NULL,
    Telefone VARCHAR(45) NOT NULL,
    DataCadastro DATE
);

INSERT INTO funcionarios(
	Funcionario_id,
	Nome,
    Sobrenome,
    Email,
    Telefone,
    DataCadastro
)
VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05'),
      (13,'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05'),
      (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05'),
      (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05');

CREATE TABLE setores(
	Setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Setor VARCHAR(45)
);

INSERT INTO setores(Setor)
VALUES('Administração'),
      ('Vendas'),
      ('Operacional'),
      ('Estratégico'),
      ('Marketing');
      
CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
    FOREIGN KEY(funcionario_id) REFERENCES funcionarios(Funcionario_id),
    FOREIGN KEY(setor_id) REFERENCES setores(Setor_id)
);

INSERT INTO funcionario_setor(funcionario_id, setor_id)
VALUES (12, 1),
       (12, 2),
       (13, 3),
       (14, 4),
       (14, 2),
       (15, 5);