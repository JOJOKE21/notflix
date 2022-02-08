import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import Tvlist from './tvlist.js'

export default function TrendingDayT() {

    const[tv,setTv]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/trending/tv/day`)
          .then(res =>{
           setTv(res.results);
          })
      }, [])
    
      return <div className='move'>
      <Tvlist title="Trending Tv Shows This Day" tv={tv}/>
      </div>
    
    

    }