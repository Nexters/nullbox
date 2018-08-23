import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/P03_setting/icon_scrolldownarrow.png';
import axios from 'axios';

class Setting extends Component {
  state = {
    easy: '',
    difficult: '',
    team: '1',
    list: [],
    categoryId: '',
    time: 30,
  };

  componentDidMount() {
    axios
      .get(
        `http://nexters-env-1.upmjem4hcw.us-east-2.elasticbeanstalk.com/api/category/1`
      )
      .then(r => {
        this.setState({ list: r.data });
      });
  }

  category = event => {
    let target = event.target;
    let id = target.id;

    if (target.style.color === 'yellow') {
      target.style.color = '';
    } else {
      target.style = 'color : yellow';
    }
  };

  game1 = event => {
    localStorage.setItem('difficulty', 1);
    let target = event.target;
    let id = target.id;

    if (target.style.color === 'yellow') {
      target.style.color = '';
    } else {
      target.style = 'color : yellow';
    }
  };

  game2 = event => {
    localStorage.setItem('difficulty', 2);
    let target = event.target;
    let id = target.id;

    if (target.style.color === 'yellow') {
      target.style.color = '';
    } else {
      target.style = 'color : yellow';
    }
  };

  speed = () => {
    localStorage.setItem('team', this.state.team);
    localStorage.setItem('j', this.state.team);
    localStorage.setItem('t', 1);

    var arr = document.querySelectorAll('.btn-fill select');
    let i = this.state.categoryId;

    for (var j = 0; j < arr.length; j++) {
      if (arr[j].style.color === 'yellow') {
        if (i == '') {
          i += arr[j].id;
        } else {
          i += ',';
          i += arr[j].id;
        }
      }
    }
    console.log(i);

    localStorage.setItem('category', i);
    localStorage.setItem('time', this.state.time);
  };

  korean = () => {
    localStorage.setItem('team', this.state.team);
    localStorage.setItem('j', this.state.team);
    localStorage.setItem('t', 1);
    localStorage.setItem('time', this.state.time);
  };

  brand = () => {
    localStorage.setItem('team', this.state.team);
    localStorage.setItem('j', this.state.team);
    localStorage.setItem('t', 1);
    localStorage.setItem('time', this.state.time);
  };

  handleChange = event => {
    let target = event.target;
    let i = target.value;
    this.setState({ team: i });
  };

  handleChangeTime = event => {
    let target = event.target;
    let i = target.value;
    this.setState({ time: i });
  };

  render() {
    let explain = localStorage.getItem('explain');
    let param = localStorage.getItem('game');

    var s = JSON.stringify(this.state.list);
    var s1 = JSON.parse(s);

    let category = s1.map(list => (
      <button class="checkbox" id={list.id} onClick={this.category.bind(this)}>
        <div className="btn-fill select" id={list.id}>
          {list.name}
        </div>
      </button>
    ));

    let selectTeam = (
      <section class="radio-items" onChange={this.handleChange}>
        <span className="game-info">Team</span>
        <div class="btn-radio">
          <input
            id="b1"
            class="only-sr checked"
            type="radio"
            name="team"
            value="1"
          />
          <label for="b1">1</label>
        </div>
        <div class="btn-radio">
          <input id="b2" class="only-sr" type="radio" name="team" value="2" />
          <label for="b2">2</label>
        </div>
        <div class="btn-radio">
          <input id="b3" class="only-sr" type="radio" name="team" value="3" />
          <label for="b3">3</label>
        </div>
        <div class="btn-radio">
          <input id="b4" class="only-sr" type="radio" name="team" value="4" />
          <label for="b4">4</label>
        </div>
        <div class="btn-radio">
          <input id="b5" class="only-sr" type="radio" name="team" value="5" />
          <label for="b4">5</label>
        </div>
      </section>
    );

    let selectTime = (
      <section class="radio-items" onChange={this.handleChangeTime}>
        <span className="game-info"> time</span>
        <div class="btn-radio">
          <input
            id="b1"
            class="only-sr checked"
            type="radio"
            name="temp2"
            value="30"
          />
          <label for="b1">30초</label>
        </div>
        <div class="btn-radio">
          <input id="b2" class="only-sr" type="radio" name="temp2" value="60" />
          <label for="b2">1분</label>
        </div>
        <div class="btn-radio">
          <input id="b3" class="only-sr" type="radio" name="temp2" value="90" />
          <label for="b3">1분 30초</label>
        </div>
        <div class="btn-radio">
          <input
            id="b4"
            class="only-sr"
            type="radio"
            name="temp2"
            value="120"
          />
          <label for="b4">2분</label>
        </div>
        <div class="btn-radio">
          <input
            id="b5"
            class="only-sr"
            type="radio"
            name="temp2"
            value="180"
          />
          <label for="b4">2분 30초</label>
        </div>
      </section>
    );

    if (param === '스피드퀴즈') {
      return (
        <div className="setting">
          <div className="header">
            <Link to="/">
              <p className="text">뒤로가기</p>
            </Link>
          </div>
          <article>
            <div className="game-name">{param}</div>
            <div className="game-info">
              {explain}
              <br />
            </div>
            {selectTeam}
            {selectTime}
            <div className="next-btn">
              <div className="category-button">{category}</div>
            </div>
            <Link to="/Speed" onClick={this.speed}>
              <p>준비하기</p>
              <img src={arrow} alt="" />
            </Link>
          </article>
        </div>
      );
    } else if (param === '브랜드이름') {
      return (
        <div className="setting">
          <div className="header">
            <Link to="/">
              <p className="text">뒤로가기</p>
            </Link>
          </div>
          <article>
            <div className="game-name">{param}</div>
            <div className="game-info">
              {explain}
              <br />
            </div>
            {selectTeam}
            {selectTime}
            <div className="home-button">
              <button className="btn-fill" onClick={this.game1.bind(this)}>
                쉬움
              </button>
              <button className="btn-fill" onClick={this.game2.bind(this)}>
                어려움
              </button>
            </div>
            <div className="next-btn">
              <Link to="/Brand" onClick={this.brand}>
                <p>준비하기</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </article>
        </div>
      );
    } else if (param === '초성게임') {
      return (
        <div className="setting">
          <div className="header">
            <Link to="/">
              <p className="text">뒤로가기</p>
            </Link>
          </div>
          <article>
            <div className="game-name">{param}</div>
            <div className="game-info">
              {explain}
              <br />
            </div>
            {selectTeam}
            {selectTime}
            <div className="next-btn">
              <Link to="/Korean" onClick={this.korean}>
                <p>준비하기</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </article>
        </div>
      );
    }
  }
}

export default Setting;
