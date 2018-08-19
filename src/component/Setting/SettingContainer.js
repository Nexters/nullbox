import React, { Component } from 'react';
import SettingPresenter from './SettingPresenter.js';
import Store from 'store';

class SettingContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <SettingPresenter />
      </Store.Provider>
    );
  }
}

export default SettingContainer;
