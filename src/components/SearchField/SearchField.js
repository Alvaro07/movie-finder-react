import React from 'react';


class SearchField extends React.Component {

    render(){
        const typeSearch = this.props.typeSearch;

        return(
            <div className="search-field">
                <input className="search-field__input" placeholder={`Search a ${typeSearch}...`} type="text" />
                <button className="search-field__button">Search</button>
            </div>
        )
    }
} 

export default SearchField;