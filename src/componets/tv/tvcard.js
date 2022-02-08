import { fetchMoviesData } from "../NetworkConnections/NetworkConnections";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Videos from "./../movie/videos.js";
export default function TvCard({tv, single}){
    const[videos, setVideos] = useState([]);
    useEffect(() => {
        if(tv) fetchMoviesData(`/tv/${tv.id}/videos`)
             .then(res => {
                console.log('videos', res);
                setVideos(res.results)
             });
        console.log(videos.title)
    }, [tv]);
    if(!tv) return null;

    if(!single){
        return <Link className="o" to={`/tv/${tv.id}`}>
        <div key={tv.id}>
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={`tv poster of ${tv.title}`}/>
        </div>
        </Link>
    } else {
        return<div key={tv.id}>
    <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={`tv poster of ${tv.title}`}/>
        {single &&  <>
        <div className="video">
        <h1 className="singletext">{tv.name}</h1>
        </div><div>
        <h2 className="singlein">First Date Aired:</h2>
        </div><div>
        <h2 className="singlein">Tag Line:</h2>
        </div>
        <p className="single">{tv.first_air_date}</p>
        <h3 className="single2">{tv.tagline}</h3>
        <p className="detailsingleO">
        <h2 className="singlein">Overview:</h2>
            {tv.overview}</p>
        <div className="video">
        {videos.length && <Videos id={videos[0].key}/>}
        </div>
        </>}
    </div>
    }
   

}