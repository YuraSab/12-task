import React, {useEffect, useState} from "react";
import {FilmList} from "../components";
import {movieService} from "../services";
import styles from "./Home.module.css";

export const Home = () => {

    const [movieList, setMovieList] = useState();
    const [isLoading, setIsLoading] = useState(null);


    const fetchMovies = async () => {
        try {
            setIsLoading(true);
            const {results, page, total_pages, total_result} = await movieService.getMovies();
            console.log(results);
            setMovieList(results)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {

        // undefined.forEach();
        fetchMovies()
    }, [])


    const renderLoading = () => {
        return (
            <div className={styles.isLoading}>Loading...</div>
        )
    }


    return (
        <div>
            {
                // true || isLoading === null ? renderLoading() : <FilmList items={movieList}/>
                isLoading || isLoading === null ? renderLoading() : <FilmList items={movieList}/>
            }
        </div>
    )
}