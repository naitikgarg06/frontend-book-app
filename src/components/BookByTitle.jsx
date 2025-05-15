import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-beta.vercel.app/books/${title}`
  );
  console.log("data", data)
  console.log("error", error)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data.error} named {title}</p>}
      {data?.title && (
        <>
          <h1>{data.title}</h1>
          <p>
            <strong>Author:</strong> {data.author}
          </p>
          <p>
            <strong>Release Year:</strong> {data.publishedYear}
          </p>
          <p>
            <strong>Genre:</strong> {data.genre.join(", ")}
          </p>
        </>
      )}
    </div>
  );
};

export default BookByTitle;
