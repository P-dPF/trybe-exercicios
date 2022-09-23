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
    console.log(error.message);
    res.status(404).json({ message: "Book not found" });
  }
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create(title, author, pageQuantity);

  res.status(201).json(newBook);
};

const update = async (req, res) => {
  const { bookId } = req.params;
  const { title, author, pageQuantity } = req.body;

  try {
    const updatedBook = await BookService.create(bookId, { title, author, pageQuantity });
    return res.status(200).json({ message: "Book updated!", book: updatedBook })
  } catch (e) {
    console.log(error.message);
    res.status(404).json({ message: "Book not found" });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
}