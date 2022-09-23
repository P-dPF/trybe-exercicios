const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const users = await BookService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await.BookService.getById(bookId);
    return res.status(200).json(book)
  } catch (e) {
    res.status(404).json({ "message": "Book not found" });
  }
};

module.exports = {
  getAll,
  getById,
}