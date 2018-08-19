import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Score.css';


class Score extends Component {


  state = {
    time: 0,
  };

  showResult = () => { };

  gameEnd = () => {

  };

  render() {
    const { word } = this.state;
    let history = localStorage.getItem('history');
    let success = localStorage.getItem('successHistory');

    let score = success.split(",").length;

    if (success === '') {
      score = 0;
    }

    console.log(score);

    localStorage.setItem('score', score);

    return (
      <div className="score">
        <div className="Header">Score</div>
        <div className="main">
          <div className="wordBox">
            <h1 className="word-title" >{history}</h1>

          </div>
          <div className="nav">
            <Link to="/" className="home"> 홈으로 </Link>
            <Link to="/" className="next"> 다음팀 시작하기 </Link>
          </div>
        </div>

        <button className="button" onClick={this.gameEnd}>
          <Link to="/result">score</Link>
        </button>
      </div>
    );
  }
}

export default Score;
