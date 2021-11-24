import React from 'react';
import "./Header.css"
import logo from '../../Res/to-do-list.jpg'

const Header = () => {
    return (
        <div className="HeaderComp">
            <div className="Logo"><img className="Logo" src={logo}/></div>
            <div className="Name"><h1>TO-DO LIST</h1></div>
        </div>

    )
}

export default Header;
