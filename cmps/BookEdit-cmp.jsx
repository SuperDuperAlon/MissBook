const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from '../services/book-service.js'
// import { eventBusService, showSuccessMsg } from '../services/event-bus.service.js'

export function BookEdit() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const { bookId } = useParams()

  useEffect(() => {
    if (!bookId) return
    loadBook()
  }, [save])

  console.log(bookToEdit)
  function loadBook() {
    bookService
      .get(bookId)
      .then((book) => setBookToEdit(book))
      .catch((err) => {
        console.log('Had issues in book details', err)
        navigate('/book')
      })
  }

  function handleChange({ target }) {
    let { value, type, name: field } = target
    value = (type === 'number') ? +value : value

    setBookToEdit((prevBook) => {
      if (target.name === 'price') {
        return {
          ...prevBook,
          listPrice: {
            ...prevBook.listPrice,
            amount: value,
          },
        }
      }
      return { ...prevBook, [field]: value }
    })
  }

  function onSaveBook(ev) {
    ev.preventDefault()
    bookService.save(bookToEdit).then((book) => {
      navigate('/book')
    })
  }

  if (!bookToEdit) return <h1>loading!</h1>
  return (
    <section className='book-edit'>
      <h2>{bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h2>
      <img src={bookToEdit.thumbnail} />
      <form onSubmit={onSaveBook}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Enter title...'
          value={bookToEdit.title}
          onChange={handleChange}
        />

        <label htmlFor='price'>Price:</label>
        <input
          type='number'
          name='price'
          id='price'
          placeholder='Enter price...'
          value={bookToEdit.amount}
          onChange={handleChange}
        />

        <div>
          <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
          <Link to='/book'>Cancel</Link>
        </div>
      </form>
    </section>
  )
}
