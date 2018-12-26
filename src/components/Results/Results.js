import React from 'react';
import { connect } from "react-redux";

/**
 * Functional Component => Results Item
 */

const ResultsItem = (props) => {

    const imgStyle = { backgroundImage: 'url(' + props.poster + ')' };

    return (
        <div className="results__item">
            <div className="results__item__image" style={imgStyle}>Image</div>
            <h3 className="results__item__title">{props.title}</h3>
            <span className="results__item__link">See more</span>
        </div>    
    )
}


/**
 * Results Component
 */


class Results extends React.Component {

    render(){
        // console.log(this.props.items)
        return(
            <section className="results">
                <ul className="results__list">
                    {this.props.items.map((value, i) =>
                        <li key={i}><ResultsItem poster={value.Poster} title={value.Title}/></li>
                    )}
                </ul>
            </section>
        )
    }


}


const mapStateToProps = state => ({ items: state.data });
// const mapDispatchToProps = (dispatch) => ({  });

export default connect(
    mapStateToProps,
    null
)(Results)
