import { fetchMoviesData } from "../NetworkConnections/NetworkConnections"
import { useEffect, useState } from "react"
import MovieList from "../movie/movielist";
import Tvlist from "../tv/tvlist";


const apikey = process.env.REACT_APP_API_KEY

export default function Search() {
    const[search,setSearch]= useState([]);
    const [movies, setMovies] = useState([]);
    const[tv,setTv] = useState([]);
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=batman&page=1&include_adult=false`)
            .then(res => {
                setSearch(res)
            })
    }, [])

    const onChange = e => {
        let movies = e.target.value
        console.log(movies)
        fetchMoviesData(`/search/movie`, `&language=en-US&query=${movies}`)
            .then(res => {
                console.log(res.results)
                setMovies(res.results)
            })
            let tv = e.target.value
            console.log(movies)
            fetchMoviesData(`/search/tv`, `&language=en-US&query=${tv}`)
                .then(res => {
                    console.log(res.results)
                    setTv(res.results)
                })
           
    }
console.log(search)
    return <div className="search">
        <input type='text' onChange={onChange}></input><button>Seacrh</button>
        <MovieList movies={movies}/>
        <Tvlist tv={tv}/>
    </div>
}