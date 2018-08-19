import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Score.css';

class Score extends Component {


  state = {
    time: 0,
  };




  showResult = () => { };

  render() {
    const { word } = this.state;
    let history = localStorage.getItem('value');

    return (
      <div className="score">
        <div className="Header">Score</div>
        <div className="main">
          <div className="wordBox">
            <h1 className="word-title">{history}</h1>
          </div>
          <div className="nav">
            <Link to="/" className="home"> 홈으로 </Link>
            <Link to="/" className="next"> 다음팀 시작하기 </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
