import { useState } from "react";
import useFetch from "../useFetch";

const Book = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("https://be-4-assignment1-beta.vercel.app/books");

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`https://be-4-assignment1-beta.vercel.app/books/${bookId}`, {
        method: "DELETE",
      });

      if(!response.ok){
        throw "Failed to delete book"
      }

      const data = await response.json()
      if(data){
        setSuccessMessage("Book delete successfully")
        window.location.reload()
      }
    } catch (error) {
        console.log(error)
    }
  };

  return data ? (
    <div>
      <h1>All Books</h1>
      {/* {loading && <p>Loading...</p>} */}
      {/* {data?.error && <p>{data.error}</p>} */}
      <ul>
        {data.map((book) => (
          <li key={book._id}>
            {book.title}{" "}
            <button
              onClick={() => {
                handleDelete(book._id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  ) : (
    loading && "Loading..."
  );
};

export default Book;