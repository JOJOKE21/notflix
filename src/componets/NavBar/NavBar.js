import React from "react";
import {BrowserRouter , Link} from "react-router-dom"
export default function NavBar() {
    return (
        <nav className="navBar">
        <div>
        <ul>
        <h1 >Seacrch</h1>
        <Link to='/' className="nodec">Home</Link>
        <h1>New and Trending</h1>
        <Link to='/Movies' className="nodec">Movies</Link>
        <Link to='/Tv' className="nodec">Tv</Link>
        <Link to='/Discover' className="nodec">Discover</Link>
        </ul>    
        </div>
        </nav>
        
    )
}