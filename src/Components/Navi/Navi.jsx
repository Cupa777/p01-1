import React from "react";
import {NavLink} from "react-router-dom";

const Navi = () => {
    return (
        <nav className='Nav'>
            <div><NavLink to="/">Home</NavLink></div>
            {/*<div><NavLink to="/login">Login</NavLink></div>*/}
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/list">To do list</NavLink></div>


        </nav>
    )
}

export default Navi

