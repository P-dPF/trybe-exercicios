const express = require('express');
const validateName = require('./middlewares/validadeName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express();

app.use(express.json());

app.use(validateName);
app.use(validatePrice);
app.use(validateDescription);
app.use(validateCreatedAt);
app.use(validateRating);
app.use(validateDifficulty);

app.post('/activities', (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = app;
