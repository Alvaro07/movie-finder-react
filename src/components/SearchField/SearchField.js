import React from 'react';


class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchValue: null };
    }

    render(){
        const typeSearch = this.props.typeSearch;

        return(
            <div className="search-field">
                <div className="search-field__wrap">
                    <input className="search-field__input" placeholder={`Search a ${typeSearch}...`} type="text" onKeyUp={this.props.onKeyUp}  />
                    <button className="search-field__button" onClick={this.props.onClick} >Search</button>
                </div>
            </div>
        )
    }
} 

export default SearchField;