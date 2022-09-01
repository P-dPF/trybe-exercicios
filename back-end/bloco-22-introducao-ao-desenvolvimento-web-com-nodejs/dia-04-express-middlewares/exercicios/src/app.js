const express = require('express');
const validateName = require('./middlewares/validadeName');
const validatePrice = require('./middlewares/validatePrice');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = app;
