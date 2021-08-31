import React, { useState } from "react";
// import { connect } from "react-redux";
import Modal from "../modal/modal";
// import Films from "../films/films"
import './style.css';

function FilmsList ( props ) {

    const [modalState, setModalState] = useState(false);
    // const [movieId, setMovieId] = useState("");
    const [movieDetail, setMovieDetail] = useState(null);

    const openModal = (film) => {
      return () => {
        setModalState(true);
        setMovieDetail(film);
        }
    };


    const closeModal = () => {
        setModalState(false);
        // mp21 = mp11;
        // mp22 = mp12;
        // mp23 = mp13;
        // mp24 = mp16;

        // mp11 = mp14;
        // mp12 = mp15;
        // mp13 = mp21;
        // mp14 = mp18;
        // mp15 = mp17;
        // mp16 = mp22;
        // mp17 = mp23;
        // mp18 = mp24;
    };

    const films = props.films;
    const filmItems = films.map((film) => {
        return (
            <div key={film.id} className="movie-card">
                <div>
                    {modalState && <div className="dark-bg"></div>}
                    <div onClick={openModal(film)} >
                      <div className="movie-card-poster">  
                        <img src={film.format} alt="Movie Poster" />
                      </div>
                    </div>
                </div>
                <h3>{film.title}</h3>
                <p>Film ID: {film.id}</p>
                <p>Production Co: {film.production_co}</p>
                <p>Release Date: {film.release}</p>
                <p>My Rating: {film.my_rating}</p>
                <p>Genre: {film.genre}</p>
            </div>
        )
    })
    return (
        <>
            <div>
                <div className="movies-container">
                    <div className="movie-flex-row">
                        {filmItems}
                    </div>
                </div>
                {modalState && <Modal handleModal={closeModal} movieDetail={movieDetail} />}
            </div>
        </>
    )
};

export default FilmsList;