import Book from "./components/Book";
import BookByTitle from "./components/BookByTitle";
import BookForm from "./components/BookForm";
import BooksByAuthor from "./components/BooksByAuthor";

function App() {
  return (
    <div className="App">
      <BookForm />
      <Book />
      <BookByTitle title="Shoe Dog"/>
      <BooksByAuthor author="Harper Lee" />
    </div>
  );
}

export default App;
