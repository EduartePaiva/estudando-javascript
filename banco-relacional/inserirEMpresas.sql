ALTER TABLE empresas MODIFY cnpj VARCHAR(14);


INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 33516973000137),
    ('vale',35688371000192),
    ('Cielo',97503694000111);


desc empresas_unidades;
desc prefeitos;
select * from empresas;
select * from cidades;


INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);
