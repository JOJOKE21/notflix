import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import MovieList from './movielist.js'

export default function TrendingWeekM() {

    const[movies,setMovies]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/movie/week`)
          .then(res =>{
           setMovies(res.results);
          })
      }, [])
    
    
    
      return <div className='move'>
      <MovieList title="Trending Movies This Week" movies={movies}/>
      </div>
    }