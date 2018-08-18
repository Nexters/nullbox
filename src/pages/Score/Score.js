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

class Score extends Components {
  state = {
    word: '',
    time: 0,
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
          <Word>{word}</Word>
          <Count></Count>
          <Time></Time>
          <Nav>
            <Button onClick={this.}></Button>
            <Button onClick={this.}></Button>
          /* 홈으로 */
          /* 다음팀 시작하기 */
          </Nav>
        </Main>
      </Container>
    );
  }
}

export default Score;