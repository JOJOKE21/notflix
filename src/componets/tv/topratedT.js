import {useState, useEffect} from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import Tvlist from './tvlist.js'

export default function TopRatedTv() {

    const[tv,setTv]= useState([])
    
      useEffect(() => {
        fetchMoviesData(`/tv/top_rated`)
          .then(res =>{
           setTv(res.results);
          })
      }, [])
    
      return <div className='move'>
      <Tvlist title="Top Rated Tv Shows" tv={tv}/>
      </div>
    
    

    }