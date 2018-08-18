import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Null Box</h1>
        <div>
          <Link to="/Game/Speed">
            <div>스피드 게임</div>
          </Link>
          <Link to="/Game/Letter">
            <div>초성 게임</div>
          </Link>
          <Link to="/Game/Brand">
            <div>브랜드 게임</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
