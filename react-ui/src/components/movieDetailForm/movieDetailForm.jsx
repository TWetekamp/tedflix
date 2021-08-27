// import { useState } from "react";
import { connect } from "react-redux";
import { updateMovieDetail } from "../../redux/actions";

const MoviedetailForm = ({ updateMovieDetail, movieDetail }) => {

  const handleChange = e => {
    const movieDetail = e.target.value;
    updateMovieDetail(movieDetail);
  };

  return <input onChange={handleChange} value={movieDetail} />;

};

const mapStateToProps = state => ({
    movieDetail: state.movieDetail
});

const mapDispatchToProps = dispatch => ({
    updateMovieDetail: movieDetail => dispatch(updateMovieDetail(movieDetail))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviedetailForm);