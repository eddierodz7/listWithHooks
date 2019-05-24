import React, { useState } from "react";

export default function MovieList() {
  const [newMovie, setNewMovie] = useState("");

  const [movies, setMovies] = useState([]);
  console.log("this is our state", useState)

  function handleNewMovieChange(e) {
    e.preventDefault();
    setNewMovie(e.target.value);
  }

  function handleNewMovie(e) {
    e.preventDefault();
    if (newMovie === "") return;
    setMovies([...movies, { id: Date.now(), text: newMovie }]);
    e.target.reset();
    console.log("it was added", setMovies)
  }

  function removeMovies(id) {
    setMovies(movies.filter(movie => movie.id !== id));
    console.log("it was deleted", setMovies);
  }

  return (
    <div>
      <h1 className="list-title">Moive List</h1>
      <form onSubmit={handleNewMovie}>
        <label>
          movie
          <br />
          <input placeholder="Your movies....." onChange={handleNewMovieChange} />
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                {movie.text}
                <a href="#" onClick={() => removeMovies(movie.id)}>
                  {" "}
                  <br />Remove
                </a>
              </li>
            ))}
          </ul>
        </label>
      </form>
    </div>
  );
}
