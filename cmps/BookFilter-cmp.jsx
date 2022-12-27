import { bookService } from "../services/book-service.js";

const { useState, useEffect, useRef } = React;

export function BookFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    bookService.getDefaultFilter()
  );
  const elInputRef = useRef(null);

  useEffect(() => {
    elInputRef.current.focus();
  }, []);

  useEffect(() => {
    onSetFilter(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }) {
    let { value, name: field, type } = target;
    value = type === "number" ? +value : value;
    setFilterByToEdit((prevFilter) => {
      return {
        ...prevFilter,
        [field]: value,
      };
    });
  }

  function onSubmitFilter(ev) {
    ev.preventDefault();
    onSetFilter(filterByToEdit);
  }

  return (
    <section className="BookFilter">
      <form onSubmit={onSubmitFilter}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="txt"
          placeholder="by name"
          value={filterByToEdit.txt}
          onChange={handleChange}
          ref={elInputRef}
        />
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          placeholder="by price"
          value={filterByToEdit.minPrice}
          onChange={handleChange}
        />
        <button>Filter Book</button>
      </form>
    </section>
  );
}
