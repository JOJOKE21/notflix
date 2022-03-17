import React from "react";
import { Link} from "react-router-dom"
export default function NavBar() {
    return (
        <nav className="nav">
        <Link to='/Search'className="nodec">Seacrh</Link>
        <Link to='/' className="nodec">Home</Link>
        <Link to='/TrendingMovie' className="nodec">Trending In Movie</Link>
        <Link to='/TrendingTv' className="nodec">Trending In Tv</Link>
        <Link to='/Movies' className="nodec">Movies</Link>
        <Link to='/Tv' className="nodec">Tv</Link>
        <Link to='/Discover' className="nodec">Discover</Link> 
        </nav>
        
    )
}