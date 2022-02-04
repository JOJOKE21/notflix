import { fetchMoviesData } from "../NetworkConnections/NetworkConnections";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Videos from "./videos";
export default function TvCard({tv, single}){
    const[videos, setVideos] = useState([]);
    useEffect(() => {
        if(tv) fetchMoviesData(`/tv/${movie.id}/videos`)
             .then(res => {
                console.log('videos', res);
                setVideos(res.results)
             });
        
    }, [tv]);
    return movie && 
    <Link to={`/tv/${movie.id}`}>
    <div key={tv.id}>
        <h1 className="textsingle">{tv.title}</h1>
        <img className="singlephoto" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={`tv poster of ${tv.title}`}/>
        <p className="detailsingle">{tv.release_date}</p>
        {single &&  <>
        <h3 className="detailsingle">{tv.tagline}</h3>
        <p className="detailsingleO">{tv.overview}</p>
        <div className="video">
        {videos.length && <Videos id={videos[0].key}/>}
        </div>
        </>}
    </div>
</Link>
}