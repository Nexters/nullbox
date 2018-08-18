import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './../../assets/P01_main/img_logo.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={logo} alt="logo" className="logo" />
        <p className="main-text">바로가기</p>
        <div className="home-button">
          <Link to="/Game/Letter">
            <div className="button">초성 게임</div>
          </Link>
          <Link to="/Game/Brand">
            <div className="button">브랜드 게임</div>
          </Link>
          <Link to="/Game/Speed">
            <div className="button">스피드 게임</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
