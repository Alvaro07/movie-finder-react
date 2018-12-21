import React from 'react';
import SearchField from '../SearchField/SearchField';

// App component

class App extends React.Component {

	componentDidMount = () => {
		document.title = "Movie Fire";
	}

	render(){
		return(
			<div className="app-wrap">
				<SearchField />
        
			</div>	
		)
	}
	
}

export default App;