const { useState, useEffect } = React;
const { Link } = ReactRouterDOM;

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";
import { bookService } from "../services/book-service.js";

import { BookList } from "../cmps/BookList-cmp.jsx";
import { BookFilter } from "../cmps/BookFilter-cmp.jsx";
import { BookDetails } from "../cmps/BookDetails-cmp.jsx";

export function BookIndex() {
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter());
  const [books, setBooks] = useState(null);
  // const [selectedBook, setSelectedBook] = useState();

  useEffect(() => {
    loadBooks();
  }, [filterBy]);

  function loadBooks() {
    bookService.query(filterBy).then((books) => setBooks(books));
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy);
  }

  function onRemoveBook(bookId) {
    bookService
      .remove(bookId)
      .then(() => {
        const updatedBooks = books.filter((book) => book.id !== bookId);
        setBooks(updatedBooks);
        showSuccessMsg("Car removed");
      })
      .catch((err) => {
        showErrorMsg("Could not remove car, try again please!");
      });
  }

  if (!books) return <h1>Loading</h1>;
  return (
    <section className="book-index">
      <div>
        <h1>This is the Book Index Page</h1>
        <BookFilter onSetFilter={onSetFilter} />

        <Link to="/book/edit">Add Book</Link>

        <BookList books={books} onRemoveBook={onRemoveBook} />
      </div>
    </section>
  );
}
