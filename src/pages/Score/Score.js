import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Score.css';

class Score extends Component {
  state = {
    time: 0,
    i: 0,
  };

  showResult = () => {};

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

    let time = localStorage.getItem('time');

    let timeResult = '';

    switch (time) {
      case '30':
        timeResult = '30';
        break;
      case '60':
        timeResult = '1:00';
        break;
      case '90':
        timeResult = '1:30';
        break;
      case '120':
        timeResult = '2:00';
        break;
      case '150':
        timeResult = '2:30';
        break;

      default:
        break;
    }

    let result = (
      <div className="btn-next-team" onClick={this.gameEnd}>
        <Link to="/Speed">
          <div>
            <img
              src="../../img/ic_rightarrow.png"
              width="28px"
              height="46px"
              alt=""
            />
            {/* /Users/qurian/Documents/GitHub/nullbox/src/img/ic_rightarrow.png */}
            {/* /Users/qurian/Documents/GitHub/nullbox/src/pages/Css/Score.css */}
          </div>
          다음팀 시작하기
        </Link>
      </div>
    );

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
      } else if (i < 16) {
        historyResult2[i] = historyResult[i];
      } else {
        historyResult3[i] = historyResult[i];
      }
    }

    if (game === '초성게임') {
      result = (
        <div className="btn-next-team">
          <Link to="/Korean">
            <div>
              <img src="../../img/ic_rightarrow.png" alt="" />
            </div>
            다음팀 시작하기
          </Link>
        </div>
      );
    }

    if (game === '브랜드이름') {
      result = (
        <div className="btn-next-team">
          <Link to="/Brand">
            <div>
              <img src="../../img/ic_rightarrow.png" alt="" />
            </div>
            다음팀 시작하기
          </Link>
        </div>
      );
    }

    if (team === '1') {
      result = (
        <div className="btn-next-result">
          <Link to="/Result">
            <div>
              <img src="../../img/ic_home.png" alt="" />
            </div>
            결과보기
          </Link>
        </div>
      );
    }

    if (t === '1') {
      localStorage.setItem('Acount', count);
      localStorage.setItem('Apass', pass);

      teamName = 'A';
    }
    if (t === '2') {
      localStorage.setItem('Bcount', count);
      localStorage.setItem('Bpass', pass);

      teamName = 'B';
    }
    if (t === '3') {
      localStorage.setItem('Ccount', count);
      localStorage.setItem('Cpass', pass);

      teamName = 'C';
    }
    if (t === '4') {
      localStorage.setItem('Dcount', count);
      localStorage.setItem('Dpass', pass);

      teamName = 'D';
    }
    if (t === '5') {
      localStorage.setItem('Ecount', count);
      localStorage.setItem('Epass', pass);

      teamName = 'E';
    }
    team -= 1;
    console.log(team);

    localStorage.setItem('j', team);

    t++;

    localStorage.setItem('t', t);

    if (localStorage.getItem('game') === '브랜드이름') {
      let brand = localStorage.getItem('history');
      console.log('do');
      return (
        <div className="scoreScore">
          <div className="headerScore">Score</div>

          <div className="mainScore">
            <div className="wordBoxScoreBrand">
              <p className="brandName">{brand}</p>;
            </div>
          </div>

          <div className="containerScore">
            <div className="countScore">{count}</div>
            <div className="TimeScore">{timeResult}</div>
            <div className="btn-next-home">
              <Link to="/">
                <div>
                  <img src="../../img/ic_home.png" alt="" />
                </div>
                홈으로
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
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
          </div>

          <div className="containerScore">
            <div className="countScore">{score}</div>
            <div className="TimeScore">{timeResult}</div>
            <div className="navScore">
              <div className="btn-next-home">
                <Link to="/">
                  <div>
                    <img src="../../img/ic_home.png" alt="" />
                  </div>
                  홈으로
                </Link>
              </div>
              {result}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Score;
