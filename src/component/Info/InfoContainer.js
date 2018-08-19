import React, { Component } from 'react';
import InfoPresenter from './InfoPresenter';
import Store from 'store';

class InfoContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <InfoPresenter />
      </Store.Provider>
    );
  }
}

export default InfoContainer;
