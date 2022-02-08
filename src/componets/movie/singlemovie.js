import { useParams } from 'react-router-dom'
import MoiveCard from './moviecard.js'
import { fetchMoviesData } from './../NetworkConnections/NetworkConnections.js'
import { useState, useEffect } from 'react';

export default function SingleMovie(props) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetchMoviesData(`/movie/${id}`)
            .then(res => {
                console.log(res);
                setMovie(res);
            });
    },[id]);

   
    return <MoiveCard movie={movie} single={true}/>
}