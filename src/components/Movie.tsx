import React from "react";

interface MovieProps {
    title: any;
    poster_path: any;
    overview: any;
    vote_average: any;
}

const imageAPI = "https://image.tmdb.org/t/p/w1280";

const Movie = (prop: MovieProps) => (
    <div className="movie">
         <img src={imageAPI + prop.poster_path} alt={prop.title} />
         <div className="movie-info">
             <h3>{prop.title}</h3>
             <span>{prop.vote_average}</span>
         </div>
    </div>
);

export default Movie;