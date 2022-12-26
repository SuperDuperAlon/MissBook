import {BookPreview} from './BookPreview-cmp.jsx'

export function BookList({books, onSelectBook, onRemoveBook}) {


    console.log(books)
    return <ul className='book-list'>
        {books.map(book => 
            <li key={book.id}>
                <BookPreview book={book}/>
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                    <button onClick={() => onSelectBook(book.id)}>Select Book</button>
                </div>
            </li>
            )}
    </ul>
}