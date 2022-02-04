import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'


export default function TrendingDayT() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/tv/day`)
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab'><h1>Trending Tv Shows This Day</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }