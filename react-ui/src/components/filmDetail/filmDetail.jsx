import React from 'react';
import Films from "../films/films";

function FilmDetail ( props ) {

    const film = props.film;
    const filmInfo = Films.map((film,index) => {
        return (
            <div key={index} className="movie-page">
                <h3>{film.title}</h3>
                <p>Production Co: {film.production_co}</p>
                <p>Release Date: {film.release}</p>
                <p>My Rating: {film.my_rating}</p>
                <p>Genre: {film.genre}</p>
            </div>
        )
    })

    return (
        <div>
            <div>
                {filmInfo}
            </div>
        </div>
    )
};

export default FilmDetail;