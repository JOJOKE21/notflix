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

export const fetchTrendingDayM = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}`)
    .then(res=> res.json())
}

export const fetchTrendingWeekM = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`)
    .then(res=> res.json())
}


export const fetchTrendingDayT = () => {
    return fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apikey}`)
    .then(res=> res.json())
}


export const fetchTrendingWeekT = () => {
    return fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apikey}`)
    .then(res=> res.json())
} 

