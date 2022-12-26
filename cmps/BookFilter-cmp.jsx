// import { useEffect, useState} from "react";
import { bookService } from "../services/book-service.js";

const { useState, useEffect } = React;

export function BookFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    bookService.getDefaultFilter()
  );

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
      <h2>This is the car filter</h2>
      <form onSubmit={onSubmitFilter}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="txt"
          placeholder="by name"
          value={filterByToEdit.txt}
          onChange={handleChange}
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
