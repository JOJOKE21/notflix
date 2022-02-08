import React from 'react';
import Movies from './componets/movie/movies.js'
import NavBar from './componets/NavBar/NavBar';
import TopRatedMovies from './componets/movie/topratedM.js';
import Tvs from './componets/tv/tv.js';
import DiscoverM from './componets/Discover/discoverM.js'
import DiscoverT from './componets/Discover/discoverT.js'
import TrendingDayM from './componets/movie/trendingdayM.js';
import TrendingWeekM from './componets/movie/trendingweekM.js';
import TrendingDayT from './componets/tv/trendingdayT.js'
import TrendingWeekT from './componets/tv/trendingweekT.js'
import SingleMovie from './componets/movie/singlemovie.js'
import SingleTv from './componets/tv/singletv.js'
import Search from './componets/Search/search.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import TopRatedTv from './componets/tv/topratedT.js'


function App() {

  return (
    <div className='App'>
      <Router>
      <NavBar/>
      <Routes>
      <Route path='/Search' element={<Search/>}>
      </Route>
      <Route path='/' element={<><Movies/><Tvs/></>}>
      </Route>

      <Route path='/Movies' element={<><TopRatedMovies/><Movies/></>}>
        </Route>
      
      <Route path='/Tv' element={<><TopRatedTv/><Tvs/></>}>
        </Route>
       
        <Route path='/Discover' element={<><DiscoverM/><DiscoverT/></>}>
        </Route>
       
        <Route path='/TrendingMovie' element={<><TrendingDayM/><TrendingWeekM/></>}>
        </Route>

        <Route path='/TrendingTv' element={<><TrendingDayT/><TrendingWeekT/></>}>
        </Route>

        <Route path='/movie/:id' element={<SingleMovie/>}>
        </Route>

        <Route path='/tv/:id' element={<SingleTv/>}>
        </Route>

      </Routes>
      
  </Router>
    </div>
  );
}

export default App;
