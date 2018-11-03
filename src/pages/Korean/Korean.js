import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
// import 'rc-progress/assets/index.css';
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
    count: 0,
    pass: 0,
    start: 0,
    setTime: 0,
    color: '#7fe5ce',
  };

  componentDidMount() {
    let t = localStorage.getItem('time');

    this.setState({ setTime: t });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    let t = this.state.setTime;

    this.gameEnd();

    this.setState({
      time: this.state.time + 100 / t,
    });

    var url = window.location.href;
    url = url + '/Score';

    if (this.state.time > 100) {
      window.location = url;
    }
  }

  createQuestionPass = () => {
    let first = parseInt(Math.random() * korean.length);
    let second = parseInt(Math.random() * korean.length);
    let i = this.state.index;

    let qord = korean[first] + ' ' + korean[second];

    this.setState({ word: qord });
    this.setState({ index: i++ });
    this.setState({ history: this.state.history.concat(qord) });

    i = this.state.pass;
    i++;
    this.setState({ pass: i });
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

    i = this.state.count;
    i++;
    this.setState({ count: i });
  };

  gameEnd = () => {
    localStorage.setItem('history', this.state.history);
    localStorage.setItem('successHistory', this.state.SuccessHistory);

    localStorage.setItem('pass', this.state.pass);
    localStorage.setItem('count', this.state.count);
  };

  start = () => {
    this.setState({ start: 1 });
    let first = parseInt(Math.random() * korean.length);
    let second = parseInt(Math.random() * korean.length);
    let i = this.index;

    let qord = korean[first] + ' ' + korean[second];

    this.setState({ word: qord });
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  render() {
    const { word } = this.state;

    let teamName = '';
    let t = localStorage.getItem('t');
    if (t === '1') {
      teamName = 'A';
    }
    if (t === '2') {
      teamName = 'B';
    }
    if (t === '3') {
      teamName = 'C';
    }
    if (t === '4') {
      teamName = 'D';
    }
    if (t === '5') {
      teamName = 'E';
    }

    let pass = '';
    let start = (
      <button className="start word-title" onClick={this.start}>
        {teamName}팀 시작하기
        <br />
        <div className="start-press">누르면 시작합니다.</div>
      </button>
    );

    if (this.state.start === 1) {
      start = (
        <button className="btn correct" onClick={this.createQuestionCorrect}>
          Correct
        </button>
      );

      pass = (
        <button className="btn pass" onClick={this.createQuestionPass}>
          Pass
        </button>
      );
    }

    return (
      <div className="container-basic">
        <div className="Header">
          <Link to="/">
            <button className="btn cancel">X</button>
          </Link>
        </div>
        <div className="main">
          <h1 className="word-title">{word}</h1>
          <div className="main-info">
            {start}
            {pass}
          </div>
        </div>

        <Line strokeWidth="1" percent={this.state.time} trailColor="white" />

        {/* 개발편의상 스코어 남겨두었음 */}
        <Link to="/score">
          <button className="btn score" onClick={this.gameEnd}>
            score
          </button>
        </Link>
      </div>
    );
  }
}

export default Korean;
