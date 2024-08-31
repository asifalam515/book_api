const express = require("express");
const app = express();
const port = 3000;

const books = require("./data.json"); // Import your data

app.use(express.json());

// Get all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Get a single book by ID
app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.bookId === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
