export function GoogleBookList({ books, onAppendBook }) {
  console.log(books);
  return (
    <ul className="book-list clean-list">
      {books.map((book) => (
        <li key={book.id}>
          <div>
            <h2>{book.volumeInfo.title}</h2>
            <h4>{book.volumeInfo.subtitle}</h4>
            <button onClick={() => onAppendBook(book.id)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
