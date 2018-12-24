import React from 'react';
import SearchField from '../SearchField/SearchField';
import Menu from '../Menu/Menu';

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
					<SearchField />
				
				</main>
        
			</div>	
		)
	}
	
}

export default App;