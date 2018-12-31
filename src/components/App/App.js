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
              path="/films"
              render={() => <MainResults type="movie" />}
            />
            <Route
              exact
              path="/tv-series"
              render={() => <MainResults type="series" />}
            />
            <Route
              path="/full-content/:title"
              render={e => <FullMovie id={e} />}
            />

            <Redirect exact from="/" to="/films" />
            <Route component={NoMatch} />
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
