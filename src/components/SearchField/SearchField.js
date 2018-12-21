import React from 'react';


class SearchField extends React.Component {

    render(){
        return(
            <div className="search-field">
                <input className="search-field__input" placeholder="Search a movie..." type="text" />
                <button className="search-field__button">Search</button>
            </div>
        )
    }
} 

export default SearchField;