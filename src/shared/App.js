import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, Game, Setting, Korean } from '../pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/Game" component={Game} />
        <Route exact path="/Game/:subjects" component={Game} />
        <Route exact path="/Korean" component={Korean} />
        <Route exact path="/Setting" component={Setting} />
      </Fragment>
    );
  }
}

export default App;
