import React from 'react';

function FilmsList ( props ) {

    const films = props.films;
    const filmItems = films.map((film,index) => {
        return (
            <div key={index}>
                {film.title}
            </div>
        )
    })

    return (
        <div>
            {filmItems}
        </div>
    )
};

export default FilmsList;