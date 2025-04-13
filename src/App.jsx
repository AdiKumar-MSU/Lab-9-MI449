import { useState } from 'react'
import './App.css'

const movie = {
  title: "Star Wars Episode I: The Phantom Menace",
  director: "George Lucas",
  released: "1999",
  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
  width: 258,
  height: 387
};

const movieReviews = [
  {id: 1, title: 'Conclave', score: 7.5, genre: 'Thriller/Mystery', bestPicture: false},
  {id: 2, title: 'Anora', score: 8.0, genre: 'Romance', bestPicture: true},
  {id: 3, title: 'The Brutalist', score: 9.0, genre: 'History/Historical drama', bestPicture: false}
];

function Movie() {
  return(
    <div className="movie">
      <h2>{movie.title} ({movie.released})</h2>
      <p>{'Directed by ' + movie.director}</p>
      <br></br>
      {movie.poster &&
      <img
        className="moviePoster"
        src={movie.poster}
        alt={movie.poster + ' poster'}
        style={{
          width: movie.width,
          height: movie.height
        }}
      />
      }
    </div>
  )
}

function Reviews() {
  const reviewList = movieReviews.map(review =>
    <li
      key={review.id}
      style={{
        color: review.bestPicture ? 'gold' : 'white'
      }}
    >
      {review.title}
    </li>
  );
  return (
    <ul>{reviewList}</ul>
  )
}

function ReviewInput() {
 return(
  <form>
    <p><label>Write a Review:</label></p>
    <textarea rows="4" cols="50"></textarea>
    <br></br>
    <input type="submit" value="Submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></input>
  </form>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <Movie />
        <br></br>
        <ReviewInput />
        <br></br>
        <h3>My Top 3 2024 Academy Award Winners:</h3>
        <Reviews />
      </div>
    </div>
  )
}

export default App
