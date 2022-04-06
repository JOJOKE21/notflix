import { useState, useEffect } from 'react';


const apikey = bed48dd19daf5f0b7bfc95478a74372b

export default function GenreT() {

    const [genres, setGenre] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}&language=en-US`)
            .then(res => res.json())
            .then(res => setGenre(res.genres))
    }, [])


    console.log(genres)
    return (
    <div className='tvgenre'>
        <h1 className='text2'>Tv Genres</h1>
        {genres.map(genre=><div key={genre.id} genre={genre}> <h1 className='text'>{genre.name}</h1></div>)}
    </div>
    )
}
