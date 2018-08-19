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
    index: 0,
    word: '',
    time: 0,
    history: [],
    SuccessHistory: [],
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  createQuestionPass = () => {
    let first = parseInt(Math.random() * korean.length);
    let second = parseInt(Math.random() * korean.length);
    let i = this.state.index;

    let qord = korean[first] + ' ' + korean[second];

    this.setState({ word: qord });
    this.setState({ index: i++ });
    this.setState({ history: this.state.history.concat(qord) });

  };

  createQuestionCorrect = () => {
    let first = parseInt(Math.random() * korean.length);
    let second = parseInt(Math.random() * korean.length);
    let i = this.index;

    let qord = korean[first] + ' ' + korean[second];

    this.setState({ word: qord });
    this.setState({ index: i++ });
    this.setState({ SuccessHistory: this.state.SuccessHistory.concat(qord) });
    this.setState({ history: this.state.history.concat(qord) });


  };

  gameEnd = () => {

    localStorage.setItem('history', this.state.history);
    localStorage.setItem('successHistory', this.state.SuccessHistory);
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
          <h1 className="word-title" >{word}</h1>
          <div className="nav">
            <button className="button" onClick={this.createQuestionCorrect}>
              Correct
            </button>
            <button className="button" onClick={this.createQuestionPass}>
              Pass
            </button>
          </div>
        </div>
        <Line strokeWidth="4" percent={this.state.time} />


        <button className="button" onClick={this.gameEnd}>
          <Link to="/score">score</Link>
        </button>
      </div>
    );
  }
}

export default Korean;
