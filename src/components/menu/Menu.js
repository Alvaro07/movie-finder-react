import React from 'react';

class Menu extends React.Component {
    
    render(){
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li>Films</li>
                    <li>TV Series</li>
                </ul>
            </nav>
        )
    }
}

export default Menu;