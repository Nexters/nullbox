import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Score.css';


class Score extends Component {


  state = {
    time: 0,
    i: 0,
  };

  showResult = () => { };

  gameEnd = () => {
    let pass = localStorage.getItem('pass');
    let count = localStorage.getItem('count');
    var s = "맞힌 개수 : " + count + "  pass한 개수:" + pass;

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
    let result =
      <Link to="/Speed" className="next" onClick={this.gameEnd}> 다음팀 시작하기
</Link>;

    if (game === '초성게임') {
      result =
        <Link to="/Korean" className="next" > 다음팀 시작하기
  </Link>;
    }

    if (game === '브랜드이름') {
      result =
        <Link to="/Brand" className="next" > 다음팀 시작하기
  </Link>;
    }


    if (team === '1') {
      result =
        <Link to="/Result" className="next" > 결과보기
  </Link>;
    }




    var s = "맞힌 개수 : " + count + "  pass한 개수:" + pass;
    if (team === '1') {
      localStorage.setItem('A', s);
      teamName = 'A';
    }
    if (team === '2') {
      localStorage.setItem('B', s);
      teamName = 'B';
    }
    if (team === '3') {
      localStorage.setItem('C', s);
      teamName = 'C';
    }
    if (team === '4') {
      localStorage.setItem('D', s);
      teamName = 'D';
    }
    if (team === '5') {
      localStorage.setItem('E', s);
      teamName = 'E';
    }
    team -= 1;
    console.log(team);

    localStorage.setItem("j", team);



    if (history === "브랜드") {
      return (
        <div className="score">
          <div className="Header">Score</div>
          <div className="main">
            <div className="wordBox">
              <h3 className="word">{teamName}팀
              </h3>
              <h3 className="word">맞힌 개수 : {count}
              </h3>
              <h3 className="word">패스한 개수 : {pass} </h3>

            </div>
            <div className="nav">
              <Link to="/" className="home"> 홈으로 </Link>
              {result}
            </div>
          </div>


        </div>
      );
    }
    else if (history === "스피드") {
      return (
        <div className="score">
          <div className="Header">Score</div>
          <div className="main">
            <div className="wordBox">
              <h3 className="word">{teamName}팀
              </h3>
              <h3 className="word">맞힌 개수 : {count}
              </h3>
              <h3 className="word">패스한 개수 : {pass} </h3>

            </div>
            <div className="nav">
              <Link to="/" className="home"> 홈으로 </Link>
              {result}
            </div>
          </div>


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
              {result}
            </div>
          </div>


        </div>
      );
    }
  }
}

export default Score;
