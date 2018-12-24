import React from 'react';
import SearchField from '../SearchField/SearchField';
import Menu from '../Menu/Menu';
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
