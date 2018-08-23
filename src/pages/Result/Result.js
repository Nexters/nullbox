import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Result.css';

class Result extends Component {
  state = {
    time: 0,
  };

  showResult = () => { };

  render() {
    const { word } = this.state;
    let score = localStorage.getItem('score');
    let game = localStorage.getItem('game');
    console.log(game);

    let result = (
      <Link to="/Setting/스피드게임" className="next">
        {' '}
        스피드퀴즈 한번 더하기{' '}
      </Link>
    );

    if (game === '초성게임') {
      result = (
        <Link to="/Setting/초성게임" className="next">
          {' '}
          초성게임 한번 더하기
        </Link>
      );
    }

    if (game === '브랜드이름') {
      result = (
        <Link to="/Setting/브랜드게임" className="next">
          {' '}
          브랜드이름 한번 더하기
        </Link>
      );
    }

    let a = localStorage.getItem('A');
    let b = localStorage.getItem('B');
    let c = localStorage.getItem('C');
    let d = localStorage.getItem('D');
    let e = localStorage.getItem('E');

    let Ascore = (
      <p className="result">
        {' '}
        <span className="team">A팀</span>{' '}
        <span className="Resultscore">{a}</span>{' '}
      </p>
    );

    let Bscore = (
      <p className="result">
        {' '}
        <span className="team">B팀</span>{' '}
        <span className="Resultscore">{b}</span>{' '}
      </p>
    );
    let Cscore = (
      <p className="result">
        {' '}
        <span className="team">C팀</span>{' '}
        <span className="Resultscore">{c}</span>{' '}
      </p>
    );
    let Dscore = (
      <p className="result">
        {' '}
        <span className="team">D팀</span>{' '}
        <span className="Resultscore">{d}</span>{' '}
      </p>
    );
    let Escore = (
      <p className="result">
        {' '}
        <span className="team">E팀</span>{' '}
        <span className="Resultscore">{e}</span>{' '}
      </p>
    );

    if (a === '') {
      Ascore = '';
    }
    if (b === '') {
      Bscore = '';
    }
    if (c === '') {
      Cscore = '';
    }
    if (d === '') {
      Dscore = '';
    }
    if (e === '') {
      Escore = '';
    }

    localStorage.setItem('A', '');
    localStorage.setItem('B', '');
    localStorage.setItem('C', '');
    localStorage.setItem('D', '');
    localStorage.setItem('E', '');

    return (
      <div className="score">
        <div className="Header">결과</div>
        <div className="main">
          <div className="resultBox">
            {Ascore}
            {Bscore}
            {Cscore}
            {Dscore}
            {Escore}
          </div>
          <div className="nav">
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
}

export default Result;
