import { useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import MovieList from './movielist.js'


export default function Movies() {

    const[movies,setMovies]= useState([]);

      useEffect(() => {
        fetchMoviesData(`/movie/popular`, `&page=1`)
          .then(res =>{
           setMovies(res.results);
          });
      }, [])
    
    
    
    
      return <div className='move'>
      <MovieList title="Popular Movies Right Now" movies={movies}/>
      </div>

    }