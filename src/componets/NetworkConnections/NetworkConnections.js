const apikey = process.env.REACT_APP_API_KEY

export const fetchMoviesData = (route) => {
    return fetch(`https://api.themoviedb.org/3${route}?api_key=${apikey}`)
        .then(res => res.json())
}
