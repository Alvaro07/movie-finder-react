import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../Menu/Menu';
import MainResults from '../MainResults/MainResults';
import FullMovie from '../FullMovie/FullMovie';


// App component

class App extends React.Component {

	componentDidMount = () => {
		document.title = "Movie Fire";
	}

	render(){

		return(
			<div className="app-wrap">
				<header className="header">
					<Menu />

				</header>
				
				<main className="main">
					<Switch>
						
						<Route path="/films" render={() => <MainResults type="movie" /> } />
						<Route path="/tv-series" render={() => <MainResults type="series" /> } />
						<Route path="/full-content/:id" render={(e) => <FullMovie id={e.match.params.id}  /> } />

						<Redirect from="/" to="/films" />

					</Switch>
				
				</main>
			</div>	
		)
	}
}


export default App;
