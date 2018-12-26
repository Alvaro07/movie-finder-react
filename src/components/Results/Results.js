import React from 'react';
import { connect } from "react-redux";
import { fetchData } from "../../reducer/actions/fetchData";

/**
 * Functional Component => Results Item
 */

const ResultsItem = (props) => {

    
    const urlImage = props.poster === "N/A" ? 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' : props.poster;
    const imgStyle = { backgroundImage: 'url(' + urlImage + ')' };

    return (
        <div className="results__item">
            <div className="results__item__image" style={imgStyle}></div>
            <div className="results__item__content">
                <h3 className="results__item__title">{props.title}</h3>
            </div>
        </div>    
    )
}


/**
 * Results Component
 */


class Results extends React.Component {

    render(){
        const page = this.props.state.pageSearch + 1;

        return(
            <section className="results">
                <ul className="results__list">
                    {this.props.state.data.map((value, i) =>
                        <li key={i}><ResultsItem poster={value.Poster} title={value.Title}/></li>
                    )}
                </ul>
                
                <div className="results__actions">
                    <button className="results__actions__more" onClick={()=> this.props.moreResults(this.props.state, page)}>More results</button>
                </div>

            </section>
        )
    }


}


const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
	moreResults: (state, page) => dispatch( fetchData(state, page) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)
