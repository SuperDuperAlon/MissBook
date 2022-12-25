const { useState } = React

import { AboutPage } from "./views/about-cmp.jsx";
import { BookIndex } from "./views/bookindex-cmp.jsx";
import { Homepage } from "./views/Homepage-cmp.jsx";


export function App() {
    const [page, setPage] = useState('home')
    console.log('page is', page);

    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <h1>Miss Book</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About</a> | 
                <a href="#" onClick={() => setPage('book')}>Book</a>
            </nav>
        </header>

        <main>
            {page === 'home' && <Homepage />}
            {page === 'about' && <AboutPage />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}