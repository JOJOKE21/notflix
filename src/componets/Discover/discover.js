import {useState, useEffect} from 'react';
import { fetchGeners } from '../NetworkConnections/NetworkConnections.js'
import './discover.css'

export default function Genre() {

    const[genre,setGenre]= useState([])
    
      useEffect(() => {
        fetchGeners()
          .then(res =>{
            setGenre(res)
          })
      }, [])
    
    
      console.log(genre)
      return <div>
          {genre.map(genre => 
            )}
      </div>
    }