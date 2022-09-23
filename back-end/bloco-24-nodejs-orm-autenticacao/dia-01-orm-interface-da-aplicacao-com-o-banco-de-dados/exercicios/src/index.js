const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const Book = require('./controllers/book.controller');

app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:bookId', Book.getById);
app.post('/books/:bookId', Book.create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));