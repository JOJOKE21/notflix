import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import { Link } from 'react-router-dom'
import './newmovies.css'

export default function Newmovies() {

    const[tv,setTv]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/tv/popular`)
          .then(res =>{
           setTv(res.results);
          })
      }, [])
    
    
    
      return <div className='tvshows'>
          <div className='tab2'><h1>Popular Tv Shows Right Now</h1>
          </div>
          {tv.map(tv=> <Link to={`/tv/${tv?.id}`}><div key={tv.id}>
              <div className='photo2'>
              <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={`movie poster of ${tv.title}`}/>
              </div> 
              </div>
              </Link>)}
      </div>

    }