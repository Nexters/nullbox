import React, { Component } from 'react';
import KoreanPresenter from './KoreanPresenter';
import Store from 'store';

class KoreanContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <KoreanPresenter />
      </Store.Provider>
    );
  }
}

export default KoreanContainer;
