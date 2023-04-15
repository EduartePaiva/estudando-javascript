CREATE TABLE IF NOT EXISTS cidades(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(255) not null,
    estado_id int UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
);

--CREATE TABLE IF NOT EXISTS teste(
--    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);
--DROP TABLE IF EXISTS teste;