import React from "react";
import { MovieInfo, MovieImage } from "./Movie.styles";

interface MovieProps {
    title: any;
    poster_path: any;
    overview: any;
    vote_average: any;
}

const imageAPI = "https://image.tmdb.org/t/p/w1280";

const Movie = (prop: MovieProps) => (
    <MovieInfo className="movie">
         <MovieImage src={imageAPI + prop.poster_path} alt={prop.title} />
         <div className="movie-info">
             <h3>{prop.title}</h3>
             <span>{prop.vote_average}</span>
         </div>
    </MovieInfo>
);

export default Movie;