import React from 'react';
import Movies from './componets/movie/movies.js'
import Movienames from './componets/MovieNames/movienames.js';
import Newmovies from './componets/newmovies/populartv.js';
import NavBar from './componets/NavBar/NavBar';
import TopMovies from './componets/movie/movies.js';
import DiscoverM from './componets/Discover/discoverM.js'
import DiscoverT from './componets/Discover/discoverT.js'
import TrendingDayM from './componets/trending/trendingdayM.js';
import TrendingWeekM from './componets/trending/trendingweekM.js'
import TrendingDayT from './componets/trending/trendingdayT.js'
import TrendingWeekT from './componets/trending/trendingweekT.js'
import Singlemovie from './componets/singlemovie/singlemovie.js'
import Singletv from './componets/singlemovie/singlemovie.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import TopTv from './componets/tv/tv.js';


function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Movies/>}>
      </Route>
      <Route path='/movie/popular/:id' element={<><Movienames/><Newmovies/></>}>
      </Route>

      <Route path='/Movies' element={<><Movienames/><TopMovies/></>}>
        </Route>
      
      <Route path='/Tv' element={<><TopTv/><Newmovies/></>}>
        </Route>
       
        <Route path='/Discover' element={<><DiscoverM/><DiscoverT/></>}>
        </Route>
       
        <Route path='/TrendingMovie' element={<><TrendingDayM/><TrendingWeekM/></>}>
        </Route>

        <Route path='/TrendingTv' element={<><TrendingDayT/><TrendingWeekT/></>}>
        </Route>

        <Route path='/movie/:id' element={<Singlemovie/>}>
        </Route>

        <Route path='/tv/:id' element={<Singletv/>}>
        </Route>

      </Routes>
      
  </Router>
    </div>
  );
}

export default App;
