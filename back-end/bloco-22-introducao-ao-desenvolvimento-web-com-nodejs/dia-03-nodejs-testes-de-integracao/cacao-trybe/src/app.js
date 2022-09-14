const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacaoTrybe.getTotalOfChocolates();
  res.status(200).json({ totalChocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const searchedChocolates = await cacaoTrybe.getChocolatesByName(name);
  return searchedChocolates.length === 0
  ? res.status(404).json(searchedChocolates)
  : res.status(200).json({ searchedChocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { name, brandId } = req.body;
  const updatedChocolate = await cacaoTrybe.updateChocolate(id, name, brandId);
  return updatedChocolate
  ? res.status(200).json({ chocolate: updatedChocolate })
  : res.status(404).json({ message: 'chocolate not found' });
});

module.exports = app;