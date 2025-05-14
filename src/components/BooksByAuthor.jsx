import useFetch from "../useFetch"

const BooksByAuthor = ({ author }) => {
    const { data, loading, error } = useFetch(`http://localhost:3000/books/author/${author}`)
    
    return data ? (
        <div>
        <h1>Books by {author}</h1>
        <ul>
            {data.map((book) => (
                <li key={book._id}>{book.title}</li>
            ))}
        </ul>
        </div>
    ) : loading && "Loading..."
}

export default BooksByAuthor