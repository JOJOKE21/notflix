import { useState, useEffect } from 'react';
import { fetchMoviesData } from './../NetworkConnections/NetworkConnections.js'
import { Link } from 'react-router-dom'


export default function Movienames() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMoviesData(`/movie/popular`)
      .then(res => {
        setMovies(res.results);
      })
  }, [])



  console.log(movies)
  return <div className='movienames'>
    <div className='tab'><h1>Popular Movies Right Now</h1>
    </div>
    {movies.map(movie => <Link to={`/movie/${movie?.id}`}><div key={movie.id}>
      <div className='photo'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`} />
      </div>
    </div>
    </Link>)}
  </div>


}