import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import Tvlist from './tvlist.js'

export default function TrendingWeekT() {

    const[tv,setTv]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/tv/week`)
          .then(res =>{
           setTv(res.results);
          })
      }, [])
    
      return <div className='move'>
      <Tvlist title="Trending Tv Shows This Week" tv={tv}/>
      </div>
    
    

    }