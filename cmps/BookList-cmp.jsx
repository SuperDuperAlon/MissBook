const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview-cmp.jsx";

export function BookList({ books, onRemoveBook }) {
    console.log(books);
  return (

    <ul className="book-list clean-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookPreview book={book} />
          <div>
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
            <Link to={`/book/${book.id}`}>Select Book</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
