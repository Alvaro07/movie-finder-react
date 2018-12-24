import React from 'react';
import SearchField from '../SearchField/SearchField';
import Menu from '../Menu/Menu';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
						
						<Redirect from="/" to="/films" />
						<Switch>
							<Route path="/films" render={() => <SearchField typeSearch="movie" /> } />
							<Route path="/tv-series" render={() => <SearchField typeSearch="tv serie" /> } />
						</Switch>
					
					</main>
			
				</div>	
			</BrowserRouter>
		)
	}
	
}

export default App;
