import MoiveCard from "./moviecard.js";
export default function MovieList({movies, title}){
    
    movies = movies.slice(0,5)
    return <>
        <h1 className="title">{title}</h1>
        <div className="movies">
            {movies.map(movie=> <MoiveCard movie={movie}/>)}
        </div>
    </>
}