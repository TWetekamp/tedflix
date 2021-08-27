import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { updateMoviesList } from "../../redux/actions";
import FilmsList from "../filmsList/filmsList";

function Films ({ updateMoviesList, films }) {

    useEffect (() => {
        getFilms()
    },[])

    const getFilms = () => {
        fetch("http://localhost:8080/server/films")
        .then(raw => raw.json())
        .then(response => updateMoviesList(response))
    }
    return (
        <div>
            <FilmsList films = {films} />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    updateMoviesList: moviesList => dispatch(updateMoviesList(moviesList))
  })
  
  const mapStateToProps = state => ({
    films: state.moviesList
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(Films);