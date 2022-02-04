import MoiveCard from "./moviecard";

export default function MovieList({movies, title}){
    return <>
        <h1>{title}</h1>
        <div className="movies">
            {movies.map(movie=> <MoiveCard movie={movie}/>)}
        </div>
    </>
}