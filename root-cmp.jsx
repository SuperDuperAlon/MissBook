const { useState } = React

import { About } from "./views/about.jsx";
import { CarIndex } from "./views/car-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {
    const [page, setPage] = useState('car')
    console.log('page is', page);

    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <h1>React Car App</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About</a> | 
                <a href="#" onClick={() => setPage('car')}>Cars</a>
            </nav>
        </header>

        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'car' && <CarIndex />}
        </main>
    </section>
}