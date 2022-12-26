export function BookPreview({ book }) {
  return (
    <article className="book-preview">
      <h2>{book.title}</h2>
      <img src={book.thumbnail} />
      <h3>
        Price: {book.listPrice.amount} {book.listPrice.currencyCode}
      </h3>
    </article>
  );
}
