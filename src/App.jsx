/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([{
    "Title": "Power Rangers",
    "Year": "2017",
    "imdbID": "tt3717490",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MTkxNzc5NF5BMl5BanBnXkFtZTgwOTM2Mzk3MTI@._V1_SX300.jpg"
},
{
    "Title": "Mighty Morphin Power Rangers",
    "Year": "1995",
    "imdbID": "tt0113820",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I2Y2I5N2MtMzJhMy00NzE2LThlMzEtNGE0ODA4M2JhOWNiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
},
{
    "Title": "Mighty Morphin Power Rangers",
    "Year": "1993–1996",
    "imdbID": "tt0106064",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMxMTgyODAtNTMwNS00ZGVjLTlkODAtZWJlYjIxMGRmZWY0XkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_SX300.jpg"
},
{
    "Title": "Turbo: A Power Rangers Movie",
    "Year": "1997",
    "imdbID": "tt0120389",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzAxMDA0MGUtMWJjYy00YWNlLTk1NmEtNTM5Y2FjYjMzNjM5XkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
},
{
    "Title": "Power Rangers",
    "Year": "2015",
    "imdbID": "tt4475970",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDc3NDE1NWMtMzU1My00YzUyLThiZGYtNzg0MzRmZTk3ZDFmXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
},
{
    "Title": "Power Rangers S.P.D.",
    "Year": "2005",
    "imdbID": "tt0414762",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWJkZmIxZDQtZGQyMS00YzY4LWE0Y2QtM2UwNDc0YTBlNmI0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_SX300.jpg"
},
{
    "Title": "Power Rangers DinoThunder",
    "Year": "2004",
    "imdbID": "tt0373587",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWM2ZTFlYjYtMzhiNS00NWVlLWI4N2UtZGMwYTZhOTZiMTZmXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_SX300.jpg"
},
{
    "Title": "Power Rangers in Space",
    "Year": "1998–1999",
    "imdbID": "tt0120575",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODM2MmZhZDctZmU4OS00ZTcyLTk0YmItOWM4NTBhYjllY2I0XkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_SX300.jpg"
},
{
    "Title": "Power Rangers Mystic Force",
    "Year": "2006",
    "imdbID": "tt0451469",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzFhNjY5OWEtNWQwYi00Zjk5LWEyNjAtNDliNjFlZjk5MGUwXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_SX300.jpg"
},
{
    "Title": "Power Rangers Zeo",
    "Year": "1996–1997",
    "imdbID": "tt0115319",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2U2MTg5ZjMtZmIxMi00YzhjLWI0MmYtNjIxZjc3MTdkODRiXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_SX300.jpg"
}]);

 const getMovieRequest = async () =>{
  const url="http://www.omdbapi.com/?s=power rangers&apikey=cbabac03"
  const response = await fetch(url);
  const responseJson=await response.json();
  console.log(responseJson)
  setMovies(responseJson.Search)
};

useEffect(()=>{
  getMovieRequest();
},[]); 

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
          <MovieList movies={movies}/>
      </div>
    </div>
  );
};

export default App;
