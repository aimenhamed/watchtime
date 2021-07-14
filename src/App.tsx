import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { MovieContainer, AppHeader, Search } from './App.styles'

const featuredAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b7241114645ea91f4bd25edff549720&page=1";
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9b7241114645ea91f4bd25edff549720&query=";

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  useEffect(() => {
    fetch(featuredAPI)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results);
    });
  }, [])
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    
    if(searchTerm) {
      fetch(searchAPI + searchTerm)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      }); 
      setSearchTerm('');
    }
  };
  const handleOnChange = (e: any) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <AppHeader>
        <form onSubmit={handleOnSubmit}>
          <Search 
            type="search" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </AppHeader>
      <MovieContainer>

        {movies.length > 0 && movies.map(movie => (
          <Movie {...movie} />
        ))}
      </MovieContainer>
    </>
  );
    
}

export default App;
