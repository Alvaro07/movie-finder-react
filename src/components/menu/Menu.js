import React from 'react';
import { NavLink } from 'react-router-dom';


class Menu extends React.Component {
    
    render(){
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li><NavLink  className="nav__link" activeClassName='is-active' to="/films/">Films</NavLink ></li>
                    <li><NavLink  className="nav__link" activeClassName='is-active' to="/tv-series/">TV Series</NavLink ></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;