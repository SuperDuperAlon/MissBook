// TODO: When user types call Google API
// TODO: Add Debounce

import { GoogleBookList } from "./google-book-list-cmp.jsx";
import { GoogleBookFilter } from "./google-book-filter.jsx";

import { googleBookService } from "../services/googlebooks.service.js";

const { useState, useEffect, useRef } = React;

export function BookAdd() {
  const [filterBy, setFilterBy] = useState(
    googleBookService.getDefaultFilter()
  );
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, [filterBy]);

  function loadBooks() {
    googleBookService.query(filterBy).then((books) => setBooks(books));
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy);
  }

  function onAppendBook(item) {
    googleBookService.addGoogleBook(item);
  }

  return (
    <section className="googleFilter">
      <h1>This is the BookAdd Page</h1>

      <GoogleBookFilter onSetFilter={onSetFilter} />
      <GoogleBookList books={books} onAppendBook={onAppendBook} />
    </section>
  );

  //   onChange={debounce(handleChange, 1000)}

  // <section className="google-filter">
  //   <h2>This is the car filter</h2>
  //   <form >
  //     <label htmlFor="title">Title:</label>
  //     <input
  //       type="text"
  //       id="title"
  //       name="txt"
  //       placeholder="by name"
  //       value={filterByToEdit.txt}
  //       onChange={handleChange}
  //       ref={elInputRef}
  //     />
  //   </form>
  // </section>
}

// onSubmit={onSubmitFilter}
{
  /* // debounce{(onChange, 5000)}) */
}

{
  /* function debounce(func, wait) {
    let timeout
  
    return function (...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
  
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  } */
}
