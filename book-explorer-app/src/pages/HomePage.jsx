import {books} from "../data/books"
import {Link} from "react-router-dom"

export default function HomePage() {


    return (
        <div>
            <h3>Books List</h3>
            <ul>
                <li>
                    <div className="book-card">
                        <p><strong>Book's Name</strong></p>
                        <p><strong>Author's name</strong></p>
                        <p><strong>Details</strong></p>
                    </div>
                </li>
                {
                    books.map(book => (
                        <li key={book.id}>
                            <div className="book-card">
                                <p><strong>{book.title}</strong></p>
                                <p>{book.author}</p>
                                <button>
                                    <Link to={`/book/${book.id}`}>View Details</Link>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}