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
        <MovieImage 
        src={prop.poster_path ? 
        (imageAPI + prop.poster_path) : 
        'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'} 
        alt="" />
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