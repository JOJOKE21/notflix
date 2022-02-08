const apikey = process.env.REACT_APP_API_KEY

export const fetchMoviesData = (route, query = '') => {
    return fetch(`https://api.themoviedb.org/3${route}?api_key=${apikey}${query}`)
        .then(res => res.json())
}
