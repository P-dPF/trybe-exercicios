# 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz
# (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id, bo.rating
FROM pixar.movies m
INNER JOIN pixar.box_office bo ON m.id = bo.movie_id
WHERE m.theater_id IS NOT NULL
AND bo.rating > 8;