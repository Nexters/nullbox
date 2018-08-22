import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  Setting,
  Korean,
  Score,
  Info,
  Result,
  Select,
  Brand,
  Speed,
} from '../pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/Score" component={Score} />
        <Route exact path="/Korean" component={Korean} />
        <Route exact path="/Setting/:subjects" component={Setting} />
        <Route exact path="/Info" component={Info} />
        <Route exact path="/Result" component={Result} />
        <Route exact path="/Select" component={Select} />
        <Route exact path="/Brand" component={Brand} />
        <Route exact path="/Speed" component={Speed} />
      </Fragment>
    );
  }
}

export default App;
