import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';
import { list } from '../../../node_modules/postcss';
import axios from 'axios';
import { URL } from '../url';
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
    state: 0,
    setTime: 0,
    start: 0,
  };

  componentDidMount() {
    let id = localStorage.getItem('category');
    console.log(id);

    const url = URL;
    if (id === '') {
      axios.get(url + `/api/question/all`).then(r => {
        this.setState({ list: r.data });
      });

      this.setState({ state: 0 });
    } else {
      axios.get(url + `/api/question?ids=${id}`).then(r => {
        this.setState({ list: r.data });
      });

      this.setState({ state: 1 });
    }
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
    var s = JSON.stringify(this.state.list[this.state.index]);
    var s1 = JSON.parse(s);

    let i = this.state.index;
    let qord = '';
    if (this.state.state === 0) {
      qord = s1.name;
    } else {
      qord = s1[1];
    }
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
    let qord = '';
    if (this.state.state === 0) {
      qord = s1.name;
    } else {
      qord = s1[1];
    }
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
    localStorage.setItem('history', '스피드');
    localStorage.setItem('history', this.state.history);
    localStorage.setItem('successHistory', this.state.SuccessHistory);
  };

  start = () => {
    this.setState({ start: 1 });

    var s = JSON.stringify(this.state.list[this.state.index]);
    var s1 = JSON.parse(s);
    let i = this.state.index;

    let qord = '';
    if (this.state.state === 0) {
      qord = s1.name;
    } else {
      qord = s1[1];
    }

    i++;
    this.setState({ index: i });
    this.setState({ word: qord });
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  render() {
    const { word } = this.state;
    console.log(this.state.setTime);
    let firwork = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="firework-slide2"
        class="firework-icon injected-svg img-firework inject-svg"
        data-name="Calque 1"
        viewBox="0 0 157 156">
        <path
          class="cls-3"
          d="M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"
        />
        <path
          class="cls-3"
          d="M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"
        />
        <path
          class="cls-3"
          d="M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"
        />
        <path
          class="cls-3"
          d="M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"
        />
        <path
          class="cls-3"
          d="M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"
        />
        <path
          class="cls-3"
          d="M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"
        />
        <path
          class="cls-3"
          d="M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"
        />
        <path
          class="cls-3"
          d="M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"
        />
        <path
          class="cls-3"
          d="M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"
        />
        <path
          class="cls-3"
          d="M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"
        />

        <path
          class="cls-2"
          d="M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"
        />
        <path
          class="cls-2"
          d="M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"
        />
        <path
          class="cls-2"
          d="M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"
        />
        <path
          class="cls-2"
          d="M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"
        />
        <path
          class="cls-2"
          d="M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"
        />
        <path
          class="cls-2"
          d="M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"
        />
        <path
          class="cls-2"
          d="M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"
        />
        <path
          class="cls-2"
          d="M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"
        />
        <path
          class="cls-2"
          d="M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"
        />
        <path
          class="cls-2"
          d="M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"
        />

        <path
          class="cls-1"
          d="M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"
        />
        <path
          class="cls-1"
          d="M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"
        />
        <path
          class="cls-1"
          d="M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"
        />
        <path
          class="cls-1"
          d="M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"
        />
        <path
          class="cls-1"
          d="M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"
        />
        <path
          class="cls-1"
          d="M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"
        />
        <path
          class="cls-1"
          d="M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"
        />
        <path
          class="cls-1"
          d="M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"
        />
        <path
          class="cls-1"
          d="M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"
        />
        <path
          class="cls-1"
          d="M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"
        />
      </svg>
    );
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
      <div className="container-basic">
        <span class="svgGame">{firwork}</span>
        <span class="svgGame2">{firwork}</span>

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
        <Line
          strokeWidth="2"
          trailWidth="2"
          percent={this.state.time}
          strokeLinecap="square"
          trailColor="rgba(255,255,255,0.05)"
        />
        <Link to="/score">
          <button className="btn score" onClick={this.gameEnd}>
            score
          </button>
        </Link>
      </div>
    );
  }
}

export default Speed;
