import React from "react";

export default function Card({ movies }) {
    return (
        <div className="row justify-content-center">
            <h3 className="text-center">Filmes em cartaz</h3>
            {movies.map((movie, index) => (
                <div className="card-movie m-2 border rounded" key={index}>
                    <img src={movie.avatar} alt="movie" className="rounded card-img my-2" />
                    <h4 className="card-title text-center">{movie.titulo}</h4>
                </div>
            ))}
        </div>
    )
}