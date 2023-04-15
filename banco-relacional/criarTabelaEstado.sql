-- Criando a tebela estado!

CREATE TABLE estados(
    id INT UNSIGNED not null AUTO_INCREMENT,
    nome varchar(45) not null,
    sigla varchar(2) not null,
    regiao ENUM('Norte','Nordeste','Centro-Oeste','Sudeste','Sul') not null,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);

