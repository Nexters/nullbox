import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/P01_main/img_logo.png';
import Flex, { FlexItem } from 'styled-flex-component';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Flex center full column>
          <img src={logo} alt="logo" className="logo" />
          <p className="main-text">바로가기</p>
          <div className="home-button">
            <Link to="/Setting/초성게임">
              <div className="button">초성 게임</div>
            </Link>
            <Link to="/Setting/브랜드게임">
              <div className="button">브랜드 게임</div>
            </Link>
            <Link to="/Setting/스피드게임">
              <div className="button">스피드 게임</div>
            </Link>
          </div>
        </Flex>
      </Fragment>
    );
  }
}

export default Home;
