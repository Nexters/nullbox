import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';

injectGlobal`
  body {
    padding:0;
    margin:0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  height: 10vh;
  width: 100%;
`;

const Main = styled.div`
  height: 70vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 60px;
  width: 100px;
  background-color: #3498db;
  color: white;
  font-weight: 200;
`;

const Word = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 250px;
`;

const korean = [
  'ㄱ',
  'ㄴ',
  'ㄷ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

class Korean extends Component {
  state = {
    word: '',
    time: 0,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('didmont');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('willmount');
  }

  tick() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  question = () => {
    let first = parseInt(Math.random() * korean.length);
    let second = parseInt(Math.random() * korean.length);

    let qord = korean[first] + ' ' + korean[second];

    this.setState({ word: qord });
  };

  render() {
    const { word } = this.state;
    return (
      <Container>
        <Header>
          <Button>
            <Link to="/">X</Link>
          </Button>
        </Header>
        <Main>
          <Word>{word}</Word>
          <Nav>
            <Button onClick={this.question}>Correct</Button>
            <Button onClick={this.question}>Pass</Button>
          </Nav>
        </Main>
        <Line strokeWidth="4" percent={this.state.time} />
      </Container>
    );
  }
}

export default Korean;
