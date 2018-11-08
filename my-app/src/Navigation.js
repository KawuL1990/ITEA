import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = ( props ) => {
    return (
        <div>
            <NavLink className="link" activeClassName="activeLink" exact to="/">Main</NavLink>
            <NavLink className="link" activeClassName="activeLink" to="/about">About</NavLink>
            <NavLink className="link" activeClassName="activeLink" exact to="/list">List</NavLink>
            <NavLink className="link" activeClassName="activeLink" to="/list/1">List/1</NavLink>
        </div>
    )
}

export default Navigation;