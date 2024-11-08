// We use Read.js here and its imported in App.js
import { useState } from "react";

function Create() {
  // Each state is initialized with an empty string
  // Each has a variable to store their value and a set function for user typing into input field
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // handleSubmit is called when the user clicks "Add movie", the values entered get logged to the console
  // e.preventDefault normally when a form is submitted the browser refreshes the page 
  // this prevents refresh so you keep the current state of the app
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(year);
    console.log(poster);
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* form onSubmit wraps the input fields and the submit button together */}
      {/* The onSubmit event is set to trigger the handleSubmit function when the form is submitted. */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}
// This gets called in app.js to use header function
export default Create;