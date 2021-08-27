import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { movieDetail } from "../../redux/reducers/movieDetail"
import Modal from "../modal/modal";
import Films from "../films/films"
import './style.css';

import mp1 from '../../assets/af19330407_King_Kong_Poster.jpg';
import mp2 from '../../assets/cr19340223_Gable_ithapponepm_poster.jpg'
import mp3 from '../../assets/dc19720324_Godfather_ver1.jpg';
import mp4 from '../../assets/fn20011026_Mulholland.png'
import mp5 from '../../assets/sf20030515_the-matrix-reloaded-cover-3.jpg';
import mp6 from '../../assets/sf20100716_Inception_ver3.jpg'
import mp7 from '../../assets/wa20070309_300poster_box.jpg';
import mp8 from '../../assets/we19641016_Fistful_Macaroni.jpg';

let mp11 = mp1;
let mp12 = mp2;
let mp13 = mp3;
let mp14 = mp4;
let mp15 = mp5;
let mp16 = mp6;
let mp17 = mp7;
let mp18 = mp8;
let mp21 = mp1;
let mp22 = mp2;
let mp23 = mp3;
let mp24 = mp4;

function FilmsList ( props ) {

    const [modalState, setModalState] = useState(false);
    const [movieId, setMovieId] = useState("");
    const [movieDetail, setMovieDetail] = useState(null);

    const openModal = (film) => {
      return () => {
        setModalState(true);
        setMovieDetail(film);
        }
    };

    const closeModal = () => {
        setModalState(false);
        mp21 = mp11;
        mp22 = mp12;
        mp23 = mp13;
        mp24 = mp16;

        mp11 = mp14;
        mp12 = mp15;
        mp13 = mp21;
        mp14 = mp18;
        mp15 = mp17;
        mp16 = mp22;
        mp17 = mp23;
        mp18 = mp24;
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
            <div className="top-container">
                <div className="posters-left">
                <img src={mp11} alt="King Kong" />
                <img src={mp12} alt="It Happened One Night" />
                <img src={mp13} alt="The Godfather" />
                <img src={mp14} alt="Mullholland Dr." />
                </div>
                <div className="search-container">
                <form className="search-form" id="search-films-form">
                    <p>
                    <label for="Search-films"></label>  
                    <input className="search-field" type="text" id="film-search-input" name="Search-films" placeholder="Enter movie title keywords.  ex: Godfather" />
                    <button className="search-button" id="find-films-btn" type="submit">Find Films</button>
                    </p>
                </form>
                </div>
                <div className="posters-right">
                <img src={mp15} alt="The Matrix Reloaded" />
                <img src={mp16} alt="Inception" />
                <img src={mp17} alt="Winchester '73" />
                <img src={mp18} alt="A Fistful of Dollars" />
                </div>
            </div>
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