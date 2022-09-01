const validateDescription = (req, res, next) => {
  const { description } = req.body;
  
  switch ('') {
    case description:
      return res.status(400).json({ message });

    case description.createdAt:
      return res.status(400).json({ message });

      case description.rating:
    return res.status(400).json({ message });

    case description.difficulty:
      return res.status(400).json({ message });
  
    default: next();
  }
};

module.exports = validateDescription;
