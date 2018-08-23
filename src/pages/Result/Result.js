import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const Text = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a6faea;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Alpha = styled.p`
  font-family: BlackHanSans;
  font-size: 70px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f9b0b0;
  -webkit-filter: blur(2px);
  filter: blur(2px);
  -webkit-text-stroke: 1px #fd575f;
  -webkit-text-stroke: 1px var(--coral-pink-two);
`;

const Team = styled.p`
  font-family: BlackHanSans;
  font-size: 70px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #fd565f, #ff453a);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 1px #e65628;
`;

const Line = styled.div`
  border-radius: 6px;
  width: 30%;
  border: solid 1px transparent;
  background-image: linear-gradient(#fe565d, #7fe5ce),
    linear-gradient(307deg, #fe565d, #7fe5ce);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Count = styled.p`
  font-family: BlackHanSans;
  font-size: 70px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a6faea;
  color: var(--pale-turquoise);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  background-color: #a6faea;
  background-color: var(--pale-turquoise);
  -webkit-text-stroke: 2px #2eb299;
`;
const Pass = styled.p`
width: 48px;
height: 35px;
font - family: NotoSansCJKkr;
font - size: 40px;
font - weight: bold;
font - style: normal;
font - stretch: normal;
line - height: 0.88;
letter - spacing: normal;
text - align: center;
color: #7fe5ce;
color: var(--light - teal);
text-align: center;
margin-top: 20%;
`;

const Time = styled.p`
width: 102px;
height: 59px;
font-family: NotoSansCJKkr;
font-size: 40px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #2eb299;
`;

const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-color: #403e70;
  justify-content: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  font-size: 14px;
`;

const ButtonBox = styled.div``;

class Result extends Component {
  state = {
    time: 0,
  };

  showResult = () => { };

  render() {

    let time = localStorage.getItem('time');

    let timeResult = '';

    switch (time) {
      case '30':
        timeResult = '30'
        break;
      case '60':
        timeResult = '1:00'
        break;
      case "90":
        timeResult = '1:30'
        break;
      case "120":
        timeResult = '2:00'
        break;
      case "150":
        timeResult = '2:30'
        break;

      default:
        break;
    }


    const { word } = this.state;
    let score = localStorage.getItem('score');
    let game = localStorage.getItem('game');
    console.log(game);

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
        <Alpha>A</Alpha>
        <Team>팀 </Team>
        <Count>{a}/</Count>
        <Pass> {Apass}</Pass>
        <Time>{timeResult}</Time>
      </Flex>
    );

    let Bscore = (
      <Flex row>
        <Alpha>B</Alpha>
        <Team>팀 </Team>
        <Count>{b}/</Count>
        <Pass> {Bpass}</Pass>
        <Time>{timeResult}</Time>
      </Flex>
    );
    let Cscore = (
      <Flex row>
        <Alpha>C</Alpha>
        <Team>팀 </Team>
        <Count>{c}/</Count>
        <Pass>{Cpass}</Pass>
        <Time>{timeResult}</Time>
      </Flex>
    );
    let Dscore = (
      <Flex row>
        <Alpha>D</Alpha>
        <Team>팀 </Team>
        <Count>{d}/</Count>
        <Pass> {Dpass}</Pass>
        <Time>{timeResult}</Time>
      </Flex>
    );
    let Escore = (
      <Flex row>
        <Alpha>E</Alpha>
        <Team>팀 </Team>
        <Count>{e}/</Count>
        <Pass>{Epass}</Pass>
        <Time>{timeResult}</Time>
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
        <Flex full column>
          <Text>RESULT SCORE</Text>
          <Container>
            <Flex center column>
              {Ascore}
              {Bscore}
              {Cscore}
              {Dscore}
              {Escore}
            </Flex>

            <Link to="/" className="home">
              <Button>홈으로</Button>
            </Link>
            <Button>{result}</Button>
          </Container>
        </Flex>
      </Fragment>
    );
  }
}

export default Result;
