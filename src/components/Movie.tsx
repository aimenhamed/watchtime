import React from "react";
import { MovieInfo, MovieImage, MovieCard, MovieOverview } from "./Movie.styles";

interface MovieProps {
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

const imageAPI = "https://image.tmdb.org/t/p/w1280";

const setVoteCategory = (vote: number) => {
    if (vote >= 7) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

const Movie = (prop: MovieProps) => (
    <MovieInfo className="movie">
        <MovieImage src={imageAPI + prop.poster_path} alt={prop.title} />
        <MovieCard>
            <h3>{prop.title}</h3>
            <span className={`tag ${setVoteCategory(prop.vote_average)}`}>
                {prop.vote_average}
            </span>
        </MovieCard>
        <MovieOverview>
            <h2>Overview:</h2>
            <p>{prop.overview}</p>
        </MovieOverview>
    </MovieInfo>

);

export default Movie;