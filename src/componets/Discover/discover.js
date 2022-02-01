import { useState, useEffect } from 'react';
import './discover.css'

const apikey = process.env.REACT_APP_API_KEY

export default function Genre() {

    const [genre, setGenre] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
            .then(res => res.json())
            .then(res => setGenre(res))
    }, [])


    console.log(genre)
    return <div>
        {genre.map(genres=><div>
        {console.log(genres)}
        <div>
        {genre.name}
        </div>
        </div>)}
    </div>
}