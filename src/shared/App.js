import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, Game } from '../pages';


class App extends Component {
  render() {
    return (
      <Fragment>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Game" component={Game}/>
          <Route exact path="/Game/:subjects" component={Game}/>
      </Fragment>
    );
  }
}

export default App;
