import useFetch from '../useFetch'

const Book = () => {
    const { data, loading, error } = useFetch('http://localhost:3000/books')

    return data ? (
        <div>
            <h1>All Books</h1>
            <ul>
            { data.map((book) => (
                <li key={book._id}>{book.title}</li>
            ))}
            </ul>
        </div>
    ) : loading && "Loading..."
}

export default Book