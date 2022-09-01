const validateDescription = (req, res, next) => {
  const { description: { rating, difficulty, createdAt } } = req.body;
  const mandatoryFields = [rating, difficulty,createdAt];

  mandatoryFields.forEach((field) => {
    if (!field) {
      return res.status(400).json({ message: `O campo ${field} é obrigatório` });
    }
  });
  
  next();
};

module.exports = validateDescription;
