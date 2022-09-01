const express = require('express');
const validateName = require('../middlewares/validadeName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  authMiddleware
);

router.post('/', (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
})

module.exports = router;
