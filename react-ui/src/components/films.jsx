import React, { useState, useEffect } from "react" ;
import FilmsList from "./filmsList";

function Films () {

    const [films, setFilms] = useState([]);
    useEffect (() => {
        getFilms()
    },[])

    const getFilms = () => {
        fetch("http://localhost:8080/server/films")
        .then(response => response.json())
        .then(film => {
            setFilms(film)
            console.log(films)
        })
    }
    return (
        <div>
            Films
            <FilmsList films = {films} />
        </div>
    )
};

export default Films;