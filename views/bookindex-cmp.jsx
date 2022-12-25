import { bookService } from "../services/book-service.js";

const { useState, useEffect } = React;

export function BookIndex() {
  const [books, setBooks] = useState([]);

  useEffect(() => {loadBooks()}, [])




  function loadBooks() {
    bookService.query().then(books => setBooks(books))
  }




  return (
    <section className="book-index">
      <h1>This is the Book Index Page</h1>
      {JSON.stringify(books)}
    </section>
  );
}
