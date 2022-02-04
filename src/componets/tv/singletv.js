import { useParams } from 'react-router-dom'
import TvCard from './tvcard.js';
import { fetchMoviesData } from './../NetworkConnections/NetworkConnections.js'
import { useState, useEffect } from 'react';

export default function Singletv(props) {
    const { id } = useParams();
    const [tv, setTv] = useState(null);
    useEffect(() => {
        fetchMoviesData(`/tv/${id}`)
            .then(res => {
                console.log(res);
                setMovie(res);
            });
    },[id]);

   
    return <TvCard tv={tv} single={true}/>
}