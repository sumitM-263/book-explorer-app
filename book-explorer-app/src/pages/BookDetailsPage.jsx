import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";


export default function BookDetailsPage(){

    const {id} = useParams();

    const navigate = useNavigate();

    const book = books.find(b => b.id === parseInt(id));

    if(!book){
        return (
            <div>
                <h2>Book not found</h2>
                <button onClick={() => navigate("/")}>Go Home</button>
            </div>
        )
    }


    return (
        <div className="book-data">
            <h2>{book.title}</h2>
            <p><strong>Author :</strong> {book.author}</p>
            <p>{book.desc}</p>

            <button onClick={() => navigate("/")}>Go Home</button>
        </div>
    )
}