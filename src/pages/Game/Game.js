import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';
import './Game.css';

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
  justify-content: top;
  align-items: center;
  flex-direction: column;
`;

class Game extends Component {
  state = {
    isPlaying: false,
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

  render() {
    console.log(this.state.time);
    return (
      <Container>
        <h1>Game Page</h1>
        <div class="question"> Question</div>
        <Line strokeWidth="4" percent={this.state.time} />
      </Container>
    );
  }
}

export default Game;
