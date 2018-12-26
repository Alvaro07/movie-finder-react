import React from 'react';
import SearchField from '../SearchField/SearchField';
import Menu from '../Menu/Menu';
import Results from '../Results/Results';
import Loader from '../Loader/Loader'; 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchData } from "../../reducer/actions/fetchData";
import { searchValue } from '../../reducer/reducer';

// App component

class App extends React.Component {

	componentDidMount = () => {
		document.title = "Movie Fire";
	}

	render(){

		let errorLayer = null;
		if ( this.props.state.data === undefined && this.props.state.isLoading !== true) {
			errorLayer = <div className="results__error">No results found</div>
		} else {
			errorLayer = null;
		}

		return(
			<BrowserRouter>
				<div className="app-wrap">
					<header className="header">
						<Menu />
					</header>
					
					<main className="main">
						<Switch>
							
							<Route path="/films" render={() => 
								<SearchField 
									typeSearch="movie" 
									onClick={()=> this.props.getData(this.props.state)} 
									onKeyUp={(e)=> this.props.handleKeyUp(e) } /> } 
								/>
								
							<Route path="/tv-series" render={() => 
								<SearchField 
									typeSearch="tv serie" 
									onClick={()=> this.props.getData(this.props.state)} 
									onKeyUp={(e)=> this.props.handleKeyUp(e) } /> } 
								/>

							

							<Redirect from="/" to="/films" />

						</Switch>

						{ this.props.state.isLoading && 
							<Loader />
						}

						{ this.props.state.data && 
							<Results />
						}

						{errorLayer}
					
					</main>
				</div>	
			</BrowserRouter>
		)
	}
	
}


const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
	getData: (state) => dispatch( fetchData(state) ),
	handleKeyUp: (e) => dispatch( searchValue(e) )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(App)
