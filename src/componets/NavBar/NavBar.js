import React from "react";
import {BrowserRouter , Link} from "react-router-dom"
export default function NavBar() {
    return (
        <nav className="navBar">
        <ul>
        <h1 className="nodec">Seacrch</h1>
        <Link to='/' className="nodec">Home</Link>
        <Link to='/TrendingMovie' className="nodec">Trending In Movie</Link>
        <Link to='/TrendingTv' className="nodec">Trending In Tv</Link>
        <Link to='/Movies' className="nodec">Movies</Link>
        <Link to='/Tv' className="nodec">Tv</Link>
        <Link to='/Discover' className="nodec">Discover</Link>
        </ul>    
        </nav>
        
    )
}