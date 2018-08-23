import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';
// import './Brand.css';
import { list } from '../../../node_modules/postcss';
import axios from 'axios';

class Brand extends Component {
  state = {
    index: 0,
    word: '',
    time: 0,
    history: [],
    SuccessHistory: [],
    list: '',
    count: 0,
    pass: 0,
    setTime: 0,
  };

  componentDidMount() {
    let id = localStorage.getItem('difficulty');

    if (id === '') {
      id = 1;
    }
    axios
      .get(
        `http://nexters-env-1.upmjem4hcw.us-east-2.elasticbeanstalk.com//api/category/3/${id}`
      )
      .then(r => {
        this.setState({ list: r.data });
      });

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
    var s = JSON.stringify(this.state.list[0]);
    var s1 = JSON.parse(s);

    let i = this.state.index;
    let qord = s1.name;
    this.setState({ index: i });
    this.setState({ word: qord });

    i = this.state.pass;
    i++;
    this.setState({ pass: i });
  };

  createQuestionCorrect = () => {
    var s = JSON.stringify(this.state.list[0]);
    var s1 = JSON.parse(s);
    let i = this.state.index;
    let qord = s1.name;

    this.setState({ index: i });
    this.setState({ word: qord });

    i = this.state.count;
    i++;
    this.setState({ count: i });
  };

  gameEnd = () => {
    localStorage.setItem('pass', this.state.pass);
    localStorage.setItem('count', this.state.count);
    localStorage.setItem('history', this.state.word);

  };

  start = () => {
    this.setState({ start: 1 });
    var s = JSON.stringify(this.state.list[0]);
    var s1 = JSON.parse(s);

    let i = this.state.index;
    let qord = s1.name;
    this.setState({ index: i });
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
      <div className="korean">
        <div className="Header">
          <Link to="/">
            <button className="btn cancel">X</button>
          </Link>
        </div>
        <div className="main">
          <h1 className="word-title">{word}</h1>
          <div className="nav">
            {start}
            {pass}
          </div>
        </div>
        <Line strokeWidth="4" percent={this.state.time} />
        <Link to="/score">
          <button className="btn score" onClick={this.gameEnd}>
            score
          </button>
        </Link>
      </div>
    );
  }
}

export default Brand;
