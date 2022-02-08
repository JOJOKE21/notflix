import { useState, useEffect } from 'react';
import { fetchMoviesData } from '../NetworkConnections/NetworkConnections.js'
import Tvlist from './tvlist.js'


export default function Tvs() {

  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetchMoviesData(`/tv/popular`)
      .then(res => {
        setTv(res.results);
      });
  }, [])




  return <div className='move2'>
    <Tvlist title="Popular Tv Shows Right Now" tv={tv} />
  </div>

}