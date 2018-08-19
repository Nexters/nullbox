import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/P01_main/img_logo.png';
import Flex, { FlexItem } from 'styled-flex-component';
import './Select.css';

import axios from 'axios';



class Select extends Component {


  state = {
    easy: '',
    difficult: '',

  };



  game1 = () => {

    localStorage.setItem('difficulty', 1);
  };

  game2 = () => {

    localStorage.setItem('difficulty', 2);

  };

  render() {


    return (
      <Fragment>
        <Flex center full column>
          <Link to="/">
            <p className="text">뒤로가기</p>
          </Link>

          <p className="main-text">Select</p>
          <div className="home-button">
            <Link to="/Brand?1">
              <div className="button" onClick={this.game1}>쉬움</div>

            </Link>
            <Link to="/Brand?2">
              <div className="button" onClick={this.game2}>어려움</div>

            </Link>
          </div>
        </Flex>
      </Fragment>
    );
  }
}

export default Select;
