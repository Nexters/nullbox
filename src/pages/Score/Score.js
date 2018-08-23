import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Score.css';
class Score extends Component {
  state = {
    time: 0,
    i: 0,
  };

  showResult = () => { };

  gameEnd = () => {
    let pass = localStorage.getItem('pass');
    let count = localStorage.getItem('count');
    var s = '맞힌 개수 : ' + count + '  pass한 개수:' + pass;
  };

  render() {
    const { word } = this.state;
    let history = localStorage.getItem('history');
    let success = localStorage.getItem('successHistory');
    let pass = localStorage.getItem('pass');
    let count = localStorage.getItem('count');
    let team = localStorage.getItem('j');
    let game = localStorage.getItem('game');
    let teamName = '';
    let t = localStorage.getItem('t');
    let result = (
      <Link to="/Speed" className="next" onClick={this.gameEnd}>
        {' '}
        다음팀 시작하기
      </Link>
    );

    console.log(history);
    console.log(success);

    let historyResult = [];
    var arr1 = history.split(',');
    var arr2 = success.split(',');
    let historyResult1 = [];

    let historyResult2 = [];
    let historyResult3 = [];
    let historyResult4 = [];
    for (var i = 0; i < arr1.length; i++) {
      console.log(arr2.indexOf(arr1[i]));
      if (arr2.indexOf(arr1[i]) === -1) {
        historyResult[i] = <p className="history1">{arr1[i]}</p>;
      } else {
        historyResult[i] = <p className="history">{arr1[i]}</p>;
      }
    }

    for (var i = 0; i < historyResult.length; i++) {
      if (i < 8) {
        historyResult1[i] = historyResult[i];
      }
      else if (i < 16) {
        historyResult2[i] = historyResult[i];
      }
      else if (i < 24) {
        historyResult3[i] = historyResult[i];
      }
      else {
        historyResult4[i] = historyResult[i];
      }
    }


    if (game === '초성게임') {
      result = (
        <Link to="/Korean" className="nextScore">
          {' '}
          다음팀 시작하기
        </Link>
      );
    }

    if (game === '브랜드이름') {
      result = (
        <Link to="/Brand" className="nextScore">
          {' '}
          다음팀 시작하기
        </Link>
      );
    }

    if (team === '1') {
      result = (
        <Link to="/Result" className="nextScore">
          {' '}
          결과보기
        </Link>
      );
    }

    var s = '맞힌 개수 : ' + count + '  pass한 개수:' + pass;
    if (t === '1') {
      localStorage.setItem('A', s);
      teamName = 'A';
    }
    if (t === '2') {
      localStorage.setItem('B', s);
      teamName = 'B';
    }
    if (t === '3') {
      localStorage.setItem('C', s);
      teamName = 'C';
    }
    if (t === '4') {
      localStorage.setItem('D', s);
      teamName = 'D';
    }
    if (t === '5') {
      localStorage.setItem('E', s);
      teamName = 'E';
    }
    team -= 1;
    console.log(team);

    localStorage.setItem('j', team);

    t++;
    console.log(t);

    localStorage.setItem('t', t);

    if (history === '브랜드') {
      return (
        <div className="scoreScore">
          <div className="headerScore">Score</div>
          <div className="mainScore">
            <div className="wordBoxScore">
              <h3 className="wordScore">{teamName}팀</h3>
              <h3 className="wordScore">맞힌 개수 : {count}</h3>
              <h3 className="wordScore">패스한 개수 : {pass} </h3>
            </div>
            <div className="navScore">
              <Link to="/" className="home">
                {' '}
                홈으로{' '}
              </Link>
              {result}
            </div>
          </div>
        </div>
      );
    } else if (history === '스피드') {
      return (
        <div className="score">
          <div className="headerScore">Score</div>
          <div className="mainScore">
            <div className="wordBoxScore">{historyResult}</div>
            <div className="navScore">
              <Link to="/" className="home">
                {' '}
                홈으로{' '}
              </Link>
              {result}
            </div>
          </div>
        </div>
      );
    }

    else {
      let score = success.split(',').length;

      if (success === '') {
        score = 0;
      }

      localStorage.setItem('score', score);

      return (
        <div className="scoreScore">
          <div className="headerScore">Score</div>

          <div className="mainScore">


            <div className="wordBoxScore">{historyResult1}</div>
            <div className="wordBoxScore">{historyResult2}</div>
            <div className="wordBoxScore">{historyResult3}</div>
            <div className="wordBoxScore">{historyResult4}</div>
          </div>

          <div className="containerScore">
            <div className="countScore">{score}</div>
            <div className="navScore">
              <Link to="/" className="homeScore">
                {' '}
                홈으로{' '}
              </Link>
              {result}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Score;
