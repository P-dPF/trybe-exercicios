const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const users = await BookService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await BookService.getById(bookId);
    return res.status(200).json(book)
  } catch (e) {
    res.status(404).json({ message: "Book not found" });
  }
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create(title, author, pageQuantity);

  res.status(201).json(newBook);
};

module.exports = {
  getAll,
  getById,
  create,
}