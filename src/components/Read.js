// We use Read.js here and its imported in App.js
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

const Read = () => {
  // UseState initializes and empty array. movies holds the movies and will be updated using the API
  // setMovies is used when movie data is retrieved from the API setMovies(response.data.movies);
  const [movies, setMovies] = useState([]);


      
      useEffect(
        ()=>{
          // Runs in the background. Makes sure program doesn't hang
          // Requests data from the API
          axios.get('http://localhost:4000/api/movies')
          
          .then((response)=>{
            // Log the response and update the state with movie data
            console.log(response.data);
            setMovies(response.data.movies);
          })
          .catch((error) => {
            // Log any errors that occur during the request
            console.log(error);
          });
      }, []);

    return( 
            <div>
            <h3>Hello from read component</h3>
            {/* Movie component is rendered. Passed myMovies then recieves movies which is populated from the API */}
            <Movies myMovies={movies}/>
            </div>
        );
    
  };
  // This gets called in app.js to use header function
  export default Read;