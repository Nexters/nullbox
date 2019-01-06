import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import '../Css/Home.css';
import line from './../../img/img_line.png';
import ic_home from '../../img/ic_home.png';

class Result extends Component {
  state = {
    time: 0,
  };

  showResult = () => {};

  render() {
    let time = localStorage.getItem('time');

    let timeResult = '';

    switch (time) {
      case '30':
        timeResult = '0:30';
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

    const { word } = this.state;
    let score = localStorage.getItem('score');
    let game = localStorage.getItem('game');

    let result = <Link to="/Setting/스피드게임">스피드퀴즈 한번 더하기</Link>;

    if (game === '초성게임') {
      result = <Link to="/Setting/초성게임">초성게임 한번 더하기</Link>;
    }

    if (game === '브랜드이름') {
      result = <Link to="/Setting/브랜드게임">브랜드이름 한번 더하기</Link>;
    }

    let a = localStorage.getItem('Acount');
    let b = localStorage.getItem('Bcount');
    let c = localStorage.getItem('Ccount');
    let d = localStorage.getItem('Dcount');
    let e = localStorage.getItem('Ecount');

    let Apass = localStorage.getItem('Apass');
    let Bpass = localStorage.getItem('Bpass');
    let Cpass = localStorage.getItem('Cpass');
    let Dpass = localStorage.getItem('Dpass');
    let Epass = localStorage.getItem('Epass');

    let Ascore = (
      <Flex row>
        <p className="result-team">A팀</p>
        <img src={line} class="img_line" />
        <p className="result-count">{a}/ </p>
        <p className="result-pass">{Apass} Pass</p>
        <p className="result-time">{timeResult}</p>
      </Flex>
    );

    let Bscore = (
      <Flex row>
        <p className="result-team">B팀</p>
        <img src={line} class="img_line" />
        <p className="result-count">{b}/ </p>
        <p className="result-pass">{Bpass} Pass</p>
        <p className="result-time">{timeResult}</p>
      </Flex>
    );
    let Cscore = (
      <Flex row>
        <p className="result-team">C팀</p>
        <img src={line} class="img_line" />
        <p className="result-count">{c}/ </p>
        <p className="result-pass">{Cpass} Pass</p>
        <p className="result-time">{timeResult}</p>
      </Flex>
    );
    let Dscore = (
      <Flex row>
        <p className="result-team">D팀</p>
        <img src={line} class="img_line" />
        <p className="result-count">{d}/ </p>
        <p className="result-pass"> {Dpass} Pass</p>
        <p className="result-time">{timeResult}</p>
      </Flex>
    );
    let Escore = (
      <Flex row>
        <p className="result-team">E팀</p>
        <img src={line} class="img_line" />
        <p className="result-count">{e}/ </p>
        <p className="result-pass">{Epass} Pass</p>
        <p className="result-time">{timeResult}</p>
      </Flex>
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

    localStorage.setItem('Acount', '');
    localStorage.setItem('Bcount', '');
    localStorage.setItem('Ccount', '');
    localStorage.setItem('Dcount', '');
    localStorage.setItem('Ecount', '');

    localStorage.setItem('Apass', '');
    localStorage.setItem('Bpass', '');
    localStorage.setItem('Cpass', '');
    localStorage.setItem('Dpass', '');
    localStorage.setItem('Epass', '');

    return (
      <Fragment>
        <Flex full columsn>
          <div className="result-word">result</div>
          <div className="result-Container">
            <Flex center column>
              <Flex row>
                <p className="result-title ra">TEAM</p>
                <p className="result-title rb">SCORE</p>
                <p className="result-title rc">TIME</p>
              </Flex>
              {Ascore}
              {Bscore}
              {Cscore}
              {Dscore}
              {Escore}
            </Flex>

            <div className="btn-next-home end-game">
              <Link to="/">
                <div className="icon">
                  <img src={ic_home} width="40vh" alt="" />
                </div>
                홈으로
              </Link>
            </div>
          </div>
        </Flex>
      </Fragment>
    );
  }
}

export default Result;
