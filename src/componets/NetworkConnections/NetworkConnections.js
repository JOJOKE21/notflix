const apikey = bed48dd19daf5f0b7bfc95478a74372b

export const fetchMoviesData = (route, query = '') => {
    return fetch(`https://api.themoviedb.org/3${route}?api_key=${apikey}${query}`)
        .then(res => res.json())
}
