import React from 'react';

import { connect } from "react-redux";
import { fetchData } from "../../reducer/actions/fetchData";
import { searchValue, resetResults } from '../../reducer/reducer';

import SearchField from '../SearchField/SearchField';
import Results from '../Results/Results';


class MainResults extends React.Component {
	
	componentDidUpdate(prevProps) {
		if (this.props.type !== prevProps.type) {
			this.props.resetResults();
		}
	}


	render(){
		
		let errorLayer = null;
		if ( this.props.state.data === undefined && this.props.state.isLoading !== true ) {
			errorLayer = <div className="results__error">No results found</div>;
		} else {
			errorLayer = null;
		}

		return (
			<React.Fragment>

				<SearchField 
					typeSearch={this.props.type}
					onClick={()=> this.props.getData(this.props.state, true, null, this.props.type)} 
					onKeyUp={(e)=> this.props.handleKeyUp(e) } />

				
				{ this.props.state.data && 
					<Results />
				}

				{errorLayer}

			</React.Fragment>
				 
		)
	}
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
	getData: (state, initialSearch, page, typeSearch) => dispatch( fetchData(state, initialSearch, page, typeSearch) ),
	handleKeyUp: (e) => dispatch( searchValue(e) ),
	resetResults: () => dispatch( resetResults() )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(MainResults)