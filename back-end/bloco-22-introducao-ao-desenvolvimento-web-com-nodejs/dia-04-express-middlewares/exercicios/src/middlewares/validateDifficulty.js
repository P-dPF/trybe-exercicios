const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const validDifficulties = ["Fácil", "Médio", "Difícil"];

  const isDifficultyValid = validDifficulties.some((diff) => diff === difficulty);

  if (!isDifficultyValid) {
    return res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }

  next();

};

module.exports = validateDifficulty;
