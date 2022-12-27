const { useEffect, useState } = React;
const { useParams, useNavigate, Link, Route, Routes } = ReactRouterDOM;

const Router = ReactRouterDOM.HashRouter;

import { bookService } from "../services/book-service.js";

export function BookDetails() {
  const [book, setBook] = useState(null);
  const [nextBookId, setNextBookId] = useState(null);
  const [prevBookId, setPrevBookId] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadBook();
  }, [params.bookId]);

  function loadBook() {
    bookService
      .get(params.bookId)
      .then((book) => {
        setBook(book);
      })
      .catch((err) => {
        console.log("Had issues in book details", err);
        navigate("/book");
      });

    bookService.getNextBookId(params.bookId).then(setNextBookId);
    bookService.getPrevBookId(params.bookId).then(setPrevBookId);
  }

  function onGoBack() {
    navigate("/book");
  }
  console.log(book);
  if (!book) return <div>Loading...</div>;
  return (
    <section className="book-details">
      <h1>{book.title}</h1>
      <img src={book.thumbnail} />
      <button onClick={onGoBack}>Go Back</button>
      <Link to={`/book/edit/${book.id}`}>Edit</Link>

        <Link to={`/book/${prevBookId}`}>Prev Book</Link>
        <Link to={`/book/${nextBookId}`}>Next Book</Link>

    </section>
  );
}