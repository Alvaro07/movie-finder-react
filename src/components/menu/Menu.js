import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    
    render(){
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li><Link className="nav__link" to="/films/">Films</Link></li>
                    <li><Link className="nav__link" to="/tv-series/">TV Series</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;