import {useState, useEffect} from 'react';
import { fetchTopMovies } from '../NetworkConnections/NetworkConnections.js'
import './movie.css'

export default function TopMovies() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchTopMovies()
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab'><h1>Top rated Movies</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }