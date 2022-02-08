import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import MovieList from './movielist.js';

export default function TopRatedMovies() {

    const[movies,setMovies]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/movie/top_rated`)
          .then(res =>{
           setMovies(res.results);
          })
      }, [])
    
      return <div className='move'>
      <MovieList title="Top Rated Movies" movies={movies}/>
      </div>
    
    

    }