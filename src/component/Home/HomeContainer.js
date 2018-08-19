import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import Store from 'store';

class HomeContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <HomePresenter />
      </Store.Provider>
    );
  }
}

export default HomeContainer;
