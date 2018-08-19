import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

class Result extends Component {


  state = {
    time: 0,

  };

  showResult = () => { };


  render() {
    const { word } = this.state;
    let score = localStorage.getItem('score');


    return (
      <div className="score">
        <div className="Header">결과</div>
        <div className="main">
          <div className="resultBox">

            <p className="result"> <span className="team">A팀</span>  <span className="Resultscore">맞춘 개수 :  {score}/10</span> </p>
            <p className="result"> <span className="team">B팀</span>  <span className="Resultscore">맞춘 개수 :  1/10</span> </p>
            <p className="result"> <span className="team">C팀</span>  <span className="Resultscore">맞춘 개수 :  1/10</span> </p>
            <p className="result"> <span className="team">D팀</span>  <span className="Resultscore">맞춘 개수 :  1/10</span> </p>
          </div>
          <div className="nav">
            <Link to="/" className="home"> 홈으로 </Link>
            <Link to="/" className="next"> 스피드퀴즈 한번 더하기 </Link>
          </div>
        </div>
      </div >
    );
  }
}

export default Result;
