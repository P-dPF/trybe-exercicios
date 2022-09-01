const express = require('express');
const validateName = require('./middlewares/validadeName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, validateDescription, validateCreatedAt, (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = app;
