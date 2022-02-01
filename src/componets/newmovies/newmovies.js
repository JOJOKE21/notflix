import {useState, useEffect} from 'react';
import { fetchNewMovies } from './../NetworkConnections/NetworkConnections.js'
import './newmovies.css'

export default function Newmovies() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchNewMovies()
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab2'><h1>Popular tv shows</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo2'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }