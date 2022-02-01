import {useState, useEffect} from 'react';
import { fetchMovieData } from './../NetworkConnections/NetworkConnections.js'
import './movienames.css'


export default function Movienames() {

    const[movies,setMovies]= useState([])
    
      useEffect(() => {
        fetchMovieData()
          .then(res =>{
           setMovies(res.results);
          })
      }, [])
    
    
    
    console.log(movies)
      return <div className='movienames'>
          <div className='tab'><h1>Popular Movies Right Now</h1>
          </div>
          {movies.map(movie=> <div>
              {console.log(movie)}
              <div className='photo'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }