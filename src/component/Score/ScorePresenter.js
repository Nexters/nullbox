import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Score.css';

class Score extends Component {
  state = {
    time: 0,
  };

  showResult = () => {};

  render() {
    const { word } = this.state;
    return (
      <div className="score">
        <div className="Header">Score</div>
        <div className="main">
          <h1 className="word-title">{word}</h1>
          <div className="nav">
            <Link to="/"> 홈으로 </Link>
            <Link to="/"> 다음팀 시작하기 </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
