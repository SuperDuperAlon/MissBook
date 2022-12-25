import { AboutPage } from '../cmps/about-cmp.jsx'
import { BookIndex } from '../cmps/bookindex-cmp.jsx'
import { Homepage } from '../cmps/Homepage-cmp.jsx'

export function Home() {
    return (
        <section>
            <h2>Books Page</h2>
            <Homepage />
            <AboutPage />
            <BookIndex />
        </section>
    )
}
