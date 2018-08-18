import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, Game, Setting, Korean,Score } from '../pages';

class App extends Component {
  constructor(props) {
    super(props);
  
    let history = [
          {  id : 1 , word : 'ㄱㄱ'}
    ] ;
    
    this.state = { history : history 
                  };
  }


  render() {
    return (

      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/Game" component={Game} />
        <Route exact path="/Game/:subjects" component={Game} />
        <Route exact path="/Korean" component={Korean}  />
        <Route exact path="/Setting" component={Setting} />
        <Route exact path="/Score" component={Score} />
          
      </Fragment>
   
    );
  }
}

export default App;
