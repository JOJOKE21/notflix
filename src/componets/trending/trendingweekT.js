import {useState, useEffect} from 'react';
import { fetchTrendingWeekT } from '../NetworkConnections/NetworkConnections.js'


export default function TrendingWeekT() {

    const[movie,setMovie]= useState([])
    
      useEffect(() => {
        fetchTrendingWeekT()
          .then(res =>{
           setMovie(res.results);
          })
      }, [])
    
    
    
    console.log(movie)
      return <div className='tvshows'>
          <div className='tab2'><h1>Trending Tv Shows This Week</h1>
          </div>
          {movie.map(movie=> <div>
              {console.log(movie)}
              <div className='photo2'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
              </div>
              </div>)}
      </div>

    }