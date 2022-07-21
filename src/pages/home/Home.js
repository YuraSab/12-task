import React, {useEffect, useState} from "react";
import {FilmList} from "../../components";
import {genresService, movieService} from "../../services";
import styles from "./Home.module.css";
import {useHistory} from "react-router-dom";

export const Home = () => {

    const [movieList, setMovieList] = useState();
    const [isLoading, setIsLoading] = useState(null);
    // const [genresList, setGenresList] = useState([]);


    const fetchMovies = async () => {
        try {
            const {results, page, total_pages, total_result} = await movieService.getMovies();
            // console.log(results);
              return  results;
        } catch (e) {
            console.error(e)
        }
    }


    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres();
            return genres
        } catch (e) {
            console.error(e)
        }
    }


    const fetchData = async () => {
        const requests = [fetchMovies(), fetchGenres()]

        try {
            setIsLoading(true);
            // Виконає подальші дії після промісу тільки тоді коли відпрацює проміс
            const [movies, genres] = await Promise.all(requests);
            console.log({movies, genres});
            const mergeWithGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genre_id => genres.find(el => el.id === genre_id));


                return {
                    ...movie,
                    movieGenresList,
                }
            })
            setMovieList(mergeWithGenresMovies)

        }catch (e){
            console.error(e);
        }finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {

        // undefined.forEach();
        fetchData()
    }, [])


    const renderLoading = () => {
        return (
            <div className={styles.isLoading}>Loading...</div>
        )
    }

    const history = useHistory();

    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }

    return (
        <div>
            {
                // true || isLoading === null ? renderLoading() : <FilmList items={movieList}/>
                isLoading || isLoading === null ? renderLoading() : (
                    <FilmList
                        items={movieList}
                        onFilmClick={onFilmClick}
                    />
                )
            }
        </div>
    )
}