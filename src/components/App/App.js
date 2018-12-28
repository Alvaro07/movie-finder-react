import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "../Menu/Menu";
import MainResults from "../MainResults/MainResults";
import FullMovie from "../FullMovie/FullMovie";

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
            <Route path="/movie-finder-react/films" render={() => <MainResults type="movie" />} />
            <Route
              path="/movie-finder-react/tv-series"
              render={() => <MainResults type="series" />}
            />
            <Route
              path="/movie-finder-react/full-content/:title"
              render={e => <FullMovie id={e} />}
            />

            <Redirect from="/" to="/movie-finder-react/films" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
