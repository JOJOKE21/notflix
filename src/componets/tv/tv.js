import {useState, useEffect} from 'react';
import { fetchMoviesData } from './../NetworkConnections/NetworkConnections.js'
import './tv.css'

export default function TopTv() {

    const[tv,setTv]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/tv/top_rated`)
          .then(res =>{
           setTv(res.results);
          })
      }, [])
    
    
    
    console.log(tv)
      return <div className='tvshows'>
          <div className='tab'><h1>Top rated tv shows</h1>
          </div>
          {tv.map(tv=> <div>
              {console.log(tv)}
              <div className='photo'>
              <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={`movie poster of ${tv.title}`}/>
              </div>
              </div>)}
      </div>

    }