import React, { Component } from 'react';
import ScorePresenter from './ScorePresenter';
import Store from 'store';

class ScoreContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <ScorePresenter />
      </Store.Provider>
    );
  }
}

export default ScoreContainer;
