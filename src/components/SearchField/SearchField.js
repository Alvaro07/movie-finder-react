import React from 'react';


class SearchField extends React.Component {


    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onClick();
        } else {
            this.props.onKeyUp(e);
        }
    }

    render(){
        const typeSearch = this.props.typeSearch;

        return(
            <div className="search-field">
                <div className="search-field__wrap">
                    <input className="search-field__input" placeholder={`Search ${typeSearch}...`} type="text" onKeyUp={(e) => this.handleKeyPress(e) }  />
                    <button className="search-field__button" onClick={this.props.onClick} >Search</button>
                </div>
            </div>
        )
    }
} 

export default SearchField;