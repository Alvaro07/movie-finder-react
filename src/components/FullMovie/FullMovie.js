import React from 'react';
import { connect } from "react-redux";
import Loader from '../Loader/Loader'; 
import { fetchFullData } from "../../reducer/actions/fetchFullData";
import { fetchDataLoading } from '../../reducer/reducer';

class FullMovie extends React.Component {

    componentDidMount(props){
        this.props.getFullData(this.props.id);
    }
    
    render(){

        if ( !this.props.state.fullContent ) {
            return <Loader />
            
        } else {
            return(
                <div className="full-movie">
                    {this.props.state.fullContent.Title}
                </div>
            )
        }
        
        
        
    }
} 

const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
    getFullData: (id) => dispatch( fetchFullData(id) ),
    activeLoader: () => dispatch ( fetchDataLoading() )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullMovie)
