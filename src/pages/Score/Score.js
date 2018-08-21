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
    let pass = localStorage.getItem('pass');
    let count = localStorage.getItem('count');




    if (history === "브랜드") {
      return (
        <div className="score">
          <div className="Header">Score</div>
          <div className="main">
            <div className="wordBox">
              <h3 className="word">맞힌 개수 : {count}
              </h3>
              <h3 className="word">패스한 개수 : {pass} </h3>

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

    else {

      let score = success.split(",").length;

      if (success === '') {
        score = 0;
      }

      localStorage.setItem('score', score);

      return (
        <div className="score">
          <div className="Header">Score</div>
          <div className="main">
            <div className="wordBox">
              <h3 className="word-title" >{history}</h3>

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
}

export default Score;
