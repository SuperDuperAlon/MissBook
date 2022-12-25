import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";

export const bookService = {
    query
  };

const STORAGE_KEY = "booksDB";

const gBooks = [
  {
    title: "catch 22",
    listPrice: {
      amount: 109,
      currencyCode: "EUR",
      isOnSale: false,
    },
  },
  {
    title: "Dune",
    listPrice: {
      amount: 123,
      currencyCode: "EUR",
      isOnSale: true,
    },
  },
  {
    title: "Fight Club",
    listPrice: {
      amount: 115,
      currencyCode: "EUR",
      isOnSale: false,
    },
  },
];


function query() {
  return storageService.query(STORAGE_KEY).then((books) => {
    console.log(books);
    if (!books || !books.length) {
      books = gBooks;
      storageService.save(STORAGE_KEY, books);
    }
    return books;
  })

}