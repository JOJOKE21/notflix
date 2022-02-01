import React, {useState, useEffect} from 'react';
import Movienames from './componets/MovieNames/movienames.js';
import Newmovies from './componets/newmovies/newmovies.js';
import NavBar from './componets/NavBar/NavBar';
import TopMovies from './componets/movie/movie.js';
import Discover from './componets/Discover/discover.js'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import TopTv from './componets/tv/tv.js';



console.log(process.env.REACT_APP_API_KEY)
const apikey = process.env.REACT_APP_API_KEY

function App() {

const[movies,setMovies]= useState([])

  let movieTitle = 'batman'
  //Spiderman No way home movieID
  let movieId = 634649
  
  useEffect(() => {
    // Movies of certain genre
    // Horror genreId = 27
    //Search by Movie title
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${movieTitle}`)
    // // // Find videos/trailers by movie id
    // fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US`)
      .then(res => res.json())
      .then(res => setMovies(res.results))
  }, [])



  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<><Movienames/><Newmovies/></>}>
      </Route>

      <Route path='/Movies' element={<TopMovies/>}>
        </Route>

      <Route path='/Tv' element={<TopTv/>}>
        </Route>
        <Route path='/Discover' element={<Discover/>}>
        </Route>

      </Routes>
      
  </Router>
    </div>
  );
}

export default App;
