import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Movie({ movie }) {
    return (
        movie && (
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`Afiche promocional de ${movie.title} ${movie.release_date}`}
                    className="rounded img-fluid object-fit-cover w-100 moviePoster"
                />
            </Link>
        )
    );
}

export default Movie;
