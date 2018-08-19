import React, { Component } from 'react';
import GamePresenter from './GamePresenter';
import Store from 'store';

class GameContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <GamePresenter />
      </Store.Provider>
    );
  }
}

export default GameContainer;
