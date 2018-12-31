import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "../Menu/Menu";
import MainResults from "../MainResults/MainResults";
import FullMovie from "../FullMovie/FullMovie";
import NoMatch from "../NoMatch/NoMatch";

// App component

class App extends React.Component {
  componentDidMount = () => {
    document.title = "Movie Fire";
  };

  render() {
    return (
      <div className="app-wrap">
        <header className="header">
          <Menu />
        </header>

        <main className="main">
          <Switch>
            <Route
              exact
              path="/movie-finder-react/films"
              render={() => <MainResults type="movie" />}
            />
            <Route
              exact
              path="/movie-finder-react/tv-series"
              render={() => <MainResults type="series" />}
            />
            <Route
              path="/movie-finder-react/full-content/:title"
              render={e => <FullMovie id={e} />}
            />

            <Redirect exact from="/" to="/movie-finder-react/films" />
            <Redirect exact from="/movie-finder-react/" to="/movie-finder-react/films" />
            <Route component={NoMatch} />
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
