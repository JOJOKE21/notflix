import {useState, useEffect} from 'react';
import { fetchTvDetals } from './../NetworkConnections/NetworkConnections.js'
import './tv.css'

export default function TopTv() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchTvDetals()
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab'><h1>Top rated tv shows</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }