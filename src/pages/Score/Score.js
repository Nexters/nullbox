import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-left: 5%;
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
  justify-content: flex-start;
`;

const Word = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 3em;
`;
const Count = styled.h1` 

`;

const Time = styled.h1` 

`;
class Score extends Component {
  constructor(props){
    super(props)
    this.state = {
       
      time: 0,
    }
  }

  showResult = () => {

  };

  render() {
    const { word } = this.state;
    return (
      <Container>
        <Header>
          Score
        </Header>
        <Main>

          <Word>{this.state.word}</Word>
          <Count></Count>
          <Time></Time>
          <Nav>
            <Button >
              <Link to = "/"> 홈으로 </Link>
            </Button>
            <Button >
              <Link to ="/"> 다음팀 시작하기 </Link>
            </Button>

     
          </Nav>
        </Main>
      </Container>
    );
  }
}

export default Score;