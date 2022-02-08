import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import MovieList from './movielist.js'

export default function TrendingDayM() {

    const[movies,setMovies]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/movie/day`)
          .then(res =>{
           setMovies(res.results);
          })
      }, [])
    
      return <div className='move'>
      <MovieList title="Trending Movies This Day" movies={movies}/>
      </div>
    
    


    }