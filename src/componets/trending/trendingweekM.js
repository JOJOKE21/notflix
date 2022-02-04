import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'


export default function TrendingWeekM() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/movie/week`)
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab2'><h1>Trending Movies This Week</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo2'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }