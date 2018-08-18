import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';
import './Korean.css';

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
      <div className="korean">
        <div className="Header">
          <button className="button">
            <Link to="/">X</Link>
          </button>
        </div>
        <div className="main">
          <h1 className="word-title">{word}</h1>
          <div className="nav">
            <button className="button" onClick={this.question}>
              Correct
            </button>
            <button className="button" onClick={this.question}>
              Pass
            </button>
          </div>
        </div>
        <Line strokeWidth="4" percent={this.state.time} />
      </div>
    );
  }
}

export default Korean;
