import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Link } from 'react-router-dom';

injectGlobal`
  body {
    padding:0;
    margin:0;
  }
`;


const Container  = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  height: 60px;
  width: 100px;
  background-color: #3498db;
  color: white;
  font-weight: 200;
`;

const ButtonBox = styled.div`
  margin-top: 200px
  width: 70%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <div>Nexters</div>
        <h1>Null Box</h1>

        <ButtonBox>
          <Link to="/Game/Speed"><Button>스피드 게임</Button></Link>
          <Link to="/Game/Letter"><Button>초성 게임</Button></Link>
          <Link to="/Game/Brand"><Button>브랜드 게임</Button></Link>
        </ButtonBox>
      </Container>
    );
  }
}

export default Home;
