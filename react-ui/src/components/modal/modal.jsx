// import React, { useState, useEffect } from "react";
import './style.css';

const Modal = ({ handleModal, movieDetail }) => {

// console.log(movieDetail);

  return (
    <>
      <div className="modal" onClick={handleModal}>
        <div className="movie-page">
          <div className="movie-card-poster">  
            <img src={movieDetail.format} alt="Movie Poster" />
          </div>  
          <p>Title: {movieDetail.title}</p>
          <br></br>
          <p>Release Date: {movieDetail.release}</p>
          <p>Production Company: {movieDetail.production_co}</p>
          <p>My Rating: {movieDetail.my_rating}</p>
          <p>My Top Ten: {movieDetail.my_top_ten}</p>
          <p>AFI Top 100: {movieDetail.afi_top_100}</p>
          <p>{movieDetail.night_at_the_movies? "DVD includes Night at the movies.":""}</p>
          <p>Last viewed on: {movieDetail.last_viewed}</p>
          <p>{movieDetail.train_scenes? "There is a scene in this movie with a train." : "There is no train scene in this movie."}</p>
          <p>Genre: {movieDetail.genre}</p>
          <p>City: {movieDetail.city}</p>
          <p>State: {movieDetail.state}</p>
          <p>Country: {movieDetail.country}</p>
          <br></br>
          <p>Storyline: {movieDetail.storyline}</p>
          <br></br>
          <p>Comments: {movieDetail.comments}</p>
      </div>
    </div>
    </>
  )
}

export default Modal;