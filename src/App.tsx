import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';


const featuredAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b7241114645ea91f4bd25edff549720&page=1";
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9b7241114645ea91f4bd25edff549720&query=";

function App() {
  const [ movies, setMovies ] = useState([]);
  useEffect(() => {
    fetch(featuredAPI)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  return (
    <div>
      {movies.length > 0 && movies.map(movie => (
        <Movie {...movie} />
      ))}
    </div>);
}

export default App;
