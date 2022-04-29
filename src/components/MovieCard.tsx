import React from 'react';
import { Movie } from '../pages/HomePage';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type MovieCardProps = {
    movie: Movie
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="flex space-x-5">
            <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt=""
                className="w-40 h-56 object-cover rounded-xl"
            />
            <div>
                <div className='text-xl font-bold'> {movie.title}</div>
                <div className='text-lg font-normal truncate-2-lines'>{movie.overview}</div>
                <div className='text-base text-gray-500'>{`평점: ${movie.vote_average}`}</div>
            </div>
        </div>
    )
}