const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const users = await BookService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
}