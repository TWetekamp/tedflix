import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { updateMoviesList } from "../../redux/actions";
import FilmsList from "../filmsList/filmsList";

// import mp1 from '../../assets/af19330407_King_Kong_Poster.jpg';
// import mp2 from '../../assets/cr19340223_Gable_ithapponepm_poster.jpg'
// import mp3 from '../../assets/dc19720324_Godfather_ver1.jpg';
// import mp4 from '../../assets/fn20011026_Mulholland.png'
// import mp5 from '../../assets/sf20030515_the-matrix-reloaded-cover-3.jpg';
// import mp6 from '../../assets/sf20100716_Inception_ver3.jpg'
// import mp7 from '../../assets/wa20070309_300poster_box.jpg';
// import mp8 from '../../assets/we19641016_Fistful_Macaroni.jpg';

// let mp11 = mp1;
// let mp12 = mp2;
// let mp13 = mp3;
// let mp14 = mp4;
// let mp15 = mp5;
// let mp16 = mp6;
// let mp17 = mp7;
// let mp18 = mp8;
// let mp21 = mp1;
// let mp22 = mp2;
// let mp23 = mp3;
// let mp24 = mp4;


function Films ({ updateMoviesList, films }) {

    // const [search, setSearch] = useState('');

    useEffect (() => {
        getFilms()
    },[]);

    const getFilms = () => {
        fetch("/server/films")
        .then(raw => raw.json())
        .then(response => updateMoviesList(response))
    }

    // const handleOnChange = (e) => {
    //     setSearch({
    //         ...search,
    //         [e.target.name]: e.target.value
    //     })

    // };

    // const handleSearch = () => {
    //     console.log(search)
    //     fetch("/server/films/search",{
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(search)
    //     })
    // }

    return (
        <div>
              {/* <div className="top-container">
                <div className="posters-left">
                    <img src={mp11} alt="King Kong" />
                    <img src={mp12} alt="It Happened One Night" />
                    <img src={mp13} alt="The Godfather" />
                    <img src={mp14} alt="Mullholland Dr." />
                </div>
                <div className="search-container">
                    <div className="search-form" id="search-films-form">
                        <p>
                        <label for="Search-films"></label>  
                        <input onChange={handleOnChange} className="search-field" type="text" id="film-search-input" name="Search-films" placeholder="Enter movie title keywords.  ex: Godfather" />
                        <button onClick={handleSearch} className="search-button" id="find-films-btn" type="button">Find Films</button>
                        </p>
                    </div>
                </div>
                    <div className="posters-right">
                    <img src={mp15} alt="The Matrix Reloaded" />
                    <img src={mp16} alt="Inception" />
                    <img src={mp17} alt="Winchester '73" />
                    <img src={mp18} alt="A Fistful of Dollars" />
                </div>
            </div> */}
                <div>
                    <FilmsList films = {films} />
                </div>
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