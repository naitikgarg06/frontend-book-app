import useFetch from "../useFetch";

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-beta.vercel.app/books/author/${author}`
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {/* {data?.error && <p>{data.error}</p>} */}
      {data && (
        <>
          {data?.error ? (
            <p>{data.error} by {author}</p>
          ) : (
            <>
              <h1>Books by {author}</h1>
              <ul>
                {data.map((book) => (
                  <li key={book._id}>{book.title}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BooksByAuthor;
