SELECT * FROM estados;

SELECT nome as 'Nome do Estado', sigla FROM estados
WHERE regiao = 'Sul';

SELECT nome, regiao, populacao FROM estados 
WHERE populacao >= 10
order by populacao DESC;