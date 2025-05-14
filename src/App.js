import Book from "./components/Book";
import BookByTitle from "./components/BookByTitle";
import BooksByAuthor from "./components/BooksByAuthor";

function App() {
  return (
    <div className="App">
      <Book />
      <BookByTitle title="Shoe Dog"/>
      <BooksByAuthor author="Harper Lee" />
    </div>
  );
}

export default App;
