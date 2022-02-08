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
    if(!movie) return null;

    if(!single){
        return <Link to={`/movie/${movie.id}`}>
        <div key={movie.id}>
        <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
        </div>
    </Link>
    } else {
        return <div key={movie.id}>
        <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
        {single &&  <>
        <div className="video">
        <h1 className="singletext">{movie.title}</h1>
        </div><div>
           <h2 className="singlein">Release date:</h2>
        </div><div> 
          <h2 className="singlein2">Tag Line:</h2>
        </div>
        <p className="single">{movie.release_date}</p>
        <h3 className="single2">{movie.tagline}</h3>
        <p className="detailsingleO"><div>
            <h2 className="singlein">Overview:</h2>
            </div>{movie.overview}</p>
        <div className="video">
        {videos.length && <Videos id={videos[0].key}/>}
        </div>
        </>}
    </div>
    }
    
        

}