import React, {useEffect, useState} from "react";
import {useParams, useRouteMatch} from "react-router-dom";
import {movieService} from "../../services";


export const MovieDetails = () => {

    // const match = useRouteMatch();
    const {params: {id}} = useRouteMatch();
    // const {id, ...rest} = useParams();
    // console.log(id, ...rest)

    const [filmDetails, setFilmDetails] = useState(null);
    const [loading, setLoading] = useState(null);


    const getMovieDetails = async () => {
        try {
            setLoading(true);
        const data = await movieService.getMovieById(id);
        setFilmDetails(data);
        }catch (e){
            console.error(e);
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMovieDetails();
    }, [])


    if(loading || loading === null) {
        return <div>loading...</div>
    }

    return (
        <div>

            <h1>{filmDetails.original_title}</h1>
            <h1>{filmDetails.genres.map((el) => (<span>{el.name}</span>))}</h1>
            <h1>{filmDetails.tagline}</h1>
            <p>{filmDetails.overview}</p>
        </div>
    )
}