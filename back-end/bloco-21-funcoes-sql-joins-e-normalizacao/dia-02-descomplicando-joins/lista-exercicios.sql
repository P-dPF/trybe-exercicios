# Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT m.title, bo.domestic_sales, bo.international_sales
FROM pixar.movies m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id;

# 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas
# internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT m.title, SUM(bo.domestic_sales) + SUM(bo.international_sales) AS qtde_vendas
FROM pixar.movies m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales
GROUP BY bo.movie_id;

# 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT m.title, bo.rating
FROM pixar.movies m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

# Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e,
# adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM pixar.theater t
LEFT JOIN pixar.movies m ON t.id = m.theater_id
ORDER BY t.name;

# Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente,
# os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM pixar.theater t
RIGHT JOIN pixar.movies m ON t.id = m.theater_id
ORDER BY t.name;