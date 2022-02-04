import { fetchMoviesData } from "../NetworkConnections/NetworkConnections";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Videos from "./videos";
export default function MoiveCard({movie, single}){
    const[videos, setVideos] = useState([]);
    useEffect(() => {
        if(movie) fetchMoviesData(`/movie/${movie.id}/videos`)
             .then(res => {
                console.log('videos', res);
                setVideos(res.results)
             });
        
    }, [movie]);
    return movie && 
    <Link to={`/movie/${movie.id}`}>
    <div key={movie.id}>
        <img className="singlephoto" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
        {single &&  <>
        <h1 className="textsingle">{movie.title}</h1>
        <p className="detailsingle">{movie.release_date}</p>
        <h3 className="detailsingle">{movie.tagline}</h3>
        <p className="detailsingleO">{movie.overview}</p>
        <div className="video">
        {videos.length && <Videos id={videos[0].key}/>}
        </div>
        </>}
    </div>
</Link>
}