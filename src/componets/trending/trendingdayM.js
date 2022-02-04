import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import './trending.css'

export default function TrendingDayM() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/movie/day`)
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab'><h1>Trending Movies This Day</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }