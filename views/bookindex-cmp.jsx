const { useState, useEffect } = React;
import { bookService } from "../services/book-service.js";

import { BookList } from "../cmps/BookList-cmp.jsx";
import { BookFilter } from "../cmps/BookFilter-cmp.jsx";
import { BookDetails } from "../cmps/BookDetails-cmp.jsx";

export function BookIndex() {
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter());
  const [books, setBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState();

  useEffect(() => {
    loadBooks();
    console.log(books);
  }, [filterBy]);

  function loadBooks() {
    bookService.query(filterBy).then((books) => setBooks(books));
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy);
  }

  function onSelectBook(bookId) {
    console.log(bookId);
  }

  function onRemoveBook(bookId) {
    bookService.remove(bookId).then(() => {
      const updatedBooks = books.filter((book) => book.id !== bookId);
      setBooks(updatedBooks);
      // flashMsg('Car removed!')
    });
  }

  if (!books) return <h1>Loading</h1>;
  return (
    <section className="book-index">
      {!selectedBook && (
        <div>
          <h1>This is the Book Index Page</h1>
          <BookFilter onSetFilter={onSetFilter} />
          <BookList books={books} onRemoveBook={onRemoveBook} />
          <BookList books={books} onSelectBook={onSelectBook} />
        </div>
      )}
      {selectedBook && <BookDetails />}
    </section>
  );
}
