import { AboutPage } from '../views/about-cmp.jsx'
import { BookIndex } from '../views/bookindex-cmp.jsx'
import { Homepage } from '../views/Homepage-cmp.jsx'

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
