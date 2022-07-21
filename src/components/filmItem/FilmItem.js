import React from "react";
import styles from "./FilmItem.module.css";

export const FilmItem = ({item,
                             // onFilmClick
}) => {

    // adult: false
    // backdrop_path: "/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg"
    // genre_ids: (3) [12, 28, 878]
    // id: 507086
    // original_language: "en"
    // original_title: "Jurassic World Dominion"
    // overview: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures."
    // popularity: 14064.562
    // poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
    // release_date: "2022-06-01"
    // title: "Jurassic World Dominion"
    // video: false
    // vote_average: 7
    // vote_count: 1680


    const {original_title, overview, release_date, vote_count, vote_average, poster_path, movieGenresList, onClicks} = item;

    return (
        <div
            className={styles.filmItem}
            // onClick={onFilmClick(item)}

        >
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title}`}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <h2>
                    {movieGenresList.map(({name, id}, i) =>(
                        <span key={id}>
                            {name}{i < movieGenresList.length - 1 && " - "}
                        </span>
                    ))}
                </h2>
                <span>Rating: {vote_average} (total votes: {vote_count})</span>
                <p>{overview}</p>
                <span>Realise date: {release_date}</span>
            </div>
        </div>
    )
}