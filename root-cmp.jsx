const { useState } = React;
const Router = ReactRouterDOM.HashRouter;
const { Route, Routes } = ReactRouterDOM;

import { AboutPage } from "./views/about-cmp.jsx";
import { BookIndex } from "./views/bookindex-cmp.jsx";
import { Homepage } from "./views/Homepage-cmp.jsx";
import { AppHeader } from "./cmps/app-header.jsx";
import { BookEdit } from "./cmps/BookEdit-cmp.jsx";
import { BookDetails } from "./cmps/BookDetails-cmp.jsx";
import { UserMsg } from "./cmps/userMsg-cmp.jsx";
import {BookAdd } from './cmps/google-book-add-cmp.jsx'

export function App() {

  return (
    <Router>
      <section className="main-layout app">
        <AppHeader />

        <main className="full main-layout">
          <Routes>
            <Route element={<Homepage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<BookEdit />} path="/book/edit" />
            <Route element={<BookEdit />} path="/book/edit/:bookId" />
            <Route element={<BookDetails />} path="/book/:bookId" />
            <Route element={<BookIndex />} path="/book" />
            <Route element={<BookAdd/>} path="/bookAdd"/>
          </Routes>
        </main>
        <UserMsg />
      </section>
    </Router>
  );
}
