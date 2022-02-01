const apikey = process.env.REACT_APP_API_KEY

export const fetchMovieData = () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
        .then(res => res.json())
}

export const fetchNewMovies = () => {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`)
        .then(res => res.json())
}

export const fetchTvDetals = () => {
    return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`)
    .then(res => res.json())
}

export const fetchTopMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`)
    .then(res => res.json())
}

export const fetchGeners = () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
    .then(res => res)
}