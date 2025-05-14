import useFetch from "../useFetch"

const BookByTitle = ({ title }) => {
    const { data, loading, error } = useFetch(`http://localhost:3000/books/${title}`)

    return data ? (
        <div>
            <h1>{data.title}</h1>
            <p><strong>Author:</strong> {data.author}</p>
            <p><strong>Release Year:</strong> {data.publishedYear}</p>
            <p><strong>Genre:</strong> {data.genre.join(", ")}</p>
        </div>
    ) : ( loading && "Loading...")
}

export default BookByTitle