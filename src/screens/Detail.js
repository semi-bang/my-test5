import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const params = useParams();
    const location = useLocation();

    console.log("*****", location)

    const [movie, setMovies] = useState({})
    const getMovies = async (id) => {
        try{
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)

            setMovies(data)
        }catch(e) {

        }
    }

    useEffect( () => {
        getMovies(params.movieId)
    }, [])

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default Detail;