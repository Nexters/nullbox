import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';
import './Speed.css';
import { list } from '../../../node_modules/postcss';
import axios from 'axios';

class Speed extends Component {
  state = {
    index: 0,
    word: '',
    time: 0,
    history: [],
    SuccessHistory: [],
    list: '',
    count: 0,
    pass: 0,
  };

  componentDidMount() {

    this.timerID = setInterval(() => this.tick(), 1000);
    let id = 1

    axios.get(`http://nexters-env-1.upmjem4hcw.us-east-2.elasticbeanstalk.com//api/question/all`).then(
      r => {
        this.setState({ list: r.data });
      }
    )
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
    var s = JSON.stringify(this.state.list[this.state.index]);
    var s1 = JSON.parse(s);

    let i = this.state.index;
    let qord = s1.name;
    i++;
    this.setState({ index: i });
    this.setState({ word: qord });

    i = this.state.pass;
    i++;
    this.setState({ pass: i });

    this.setState({ history: this.state.history.concat(qord) });
  };

  createQuestionCorrect = () => {

    var s = JSON.stringify(this.state.list[this.state.index]);
    var s1 = JSON.parse(s);
    let i = this.state.index;
    let qord = s1.name;
    i++;
    this.setState({ index: i });
    this.setState({ word: qord });

    i = this.state.count;
    i++;
    this.setState({ count: i });

    this.setState({ SuccessHistory: this.state.SuccessHistory.concat(qord) });
    this.setState({ history: this.state.history.concat(qord) });

  };

  gameEnd = () => {
    localStorage.setItem('pass', this.state.pass);
    localStorage.setItem('count', this.state.count);
    localStorage.setItem('history', "스피드");

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

export default Speed;
