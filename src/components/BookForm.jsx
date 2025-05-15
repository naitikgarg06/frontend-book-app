import { useState } from "react";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: null,
    genre: [],
    language: "",
    country: "United States",
    rating: 0,
    summary: "",
    coverImageUrl: "",
  });

  const onChnageHandler = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://be-4-assignment1-beta.vercel.app/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw "Failed to add movie";
      }

      const data = await response.json();
      console.log("Added movie:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add New Book</h1>
      <form onSubmit={onSubmitHandler}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Author:</label>
        <br />
        <input
          type="text"
          name="author"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Published Year:</label>
        <br />
        <input
          type="number"
          name="publishedYear"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Genre:</label>
        <br />
        <input
          type="text"
          name="genre"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Language:</label>
        <br />
        <input
          type="text"
          name="language"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Country:</label>
        <br />
        <input
          type="text"
          name="country"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Summary:</label>
        <br />
        <input
          type="text"
          name="summary"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <label>Cover Image Url:</label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          onChange={(e) => {
            const { name, value } = e.target;
            onChnageHandler(name, value);
          }}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BookForm;
