const cors = require("cors");
const express = require("express");
const { getAllBooks, getBooksById } = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

//Retrieve All Books
app.get("/books", async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

//Exercise 2: Retrieve Book by ID
app.get("/books/details/:id", async (req, res) => {
  let book = getBooksById(parseInt(req.params.id));
  res.json({
    book,
  });
});

module.exports = { app };
