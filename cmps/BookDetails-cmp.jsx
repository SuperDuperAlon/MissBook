const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { bookService } from "../services/book-service.js";

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }


    function onGoBack() {
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h1>{book.title}</h1>
              <img src={book.thumbnail} />
        <button onClick={onGoBack}>Go Back</button>
        <Link to={`/book/edit/${book.id}`}>Edit</Link>
    </section>
}

