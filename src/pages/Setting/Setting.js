import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/icon_scrolldownarrow.png';
import axios from 'axios';
import { URL } from '../url';

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
    const url = URL;
    axios.get(url + `/api/category/1`).then(r => {
      this.setState({ list: r.data });
    });
  }

  category = event => {
    let target = event.target;
    let id = target.id;

    if (target.style.color === 'color: #f9b0b0') {
      target.style.color = '';
    } else {
      target.style = 'color : #f9b0b0';
    }
  };

  game1 = event => {
    localStorage.setItem('difficulty', 1);
    let target = event.target;
    let id = target.id;

    if (target.style.color === 'color : #f9b0b0') {
      target.style.color = '';
    } else {
      target.style = 'color : #f9b0b0';
    }
  };

  game2 = event => {
    localStorage.setItem('difficulty', 2);
    let target = event.target;
    let id = target.id;

    if (target.style.color === 'color: #f9b0b0') {
      target.style.color = '';
    } else {
      target.style = 'color : #f9b0b0';
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
        <div class="btn-radio-empty">
          <span />팀 수
        </div>
        <label class="btn-radio" for="b1">
          1개 팀
          <input id="b1" class="only-sr" type="radio" name="team" value="1" />
          <span class="checkmark" />
        </label>
        <label class="btn-radio" for="b2">
          2개 팀
          <input id="b2" class="only-sr" type="radio" name="team" value="2" />
          <span class="checkmark" />
        </label>
        <label class="btn-radio" for="b3">
          3개 팀
          <input id="b3" class="only-sr" type="radio" name="team" value="3" />
          <span class="checkmark" />
        </label>
        <label class="btn-radio" for="b4">
          4개 팀
          <input id="b4" class="only-sr" type="radio" name="team" value="4" />
          <span class="checkmark" />
        </label>
        <label class="btn-radio" for="b5">
          5개 팀
          <input id="b5" class="only-sr" type="radio" name="team" value="5" />
          <span class="checkmark" />
        </label>
      </section>
    );

    let selectTime = (
      <section class="radio-items" onChange={this.handleChangeTime}>
        <div class="btn-radio-empty">
          <span>제한시간</span>
        </div>
        <div class="btn-radio">
          <label for="t1">
            <input
              id="t1"
              class="only-sr"
              type="radio"
              name="time"
              value="30"
            />
            <span class="checkmark" />
            30초
          </label>
        </div>
        <div class="btn-radio">
          <label for="t2">
            <input
              id="t2"
              class="only-sr"
              type="radio"
              name="time"
              value="60"
            />
            <span class="checkmark" />
            1분
          </label>
        </div>
        <div class="btn-radio">
          <label for="t3">
            <input
              id="t3"
              class="only-sr"
              type="radio"
              name="time"
              value="90"
            />
            <span class="checkmark" />
            1분 30초
          </label>
        </div>
        <div class="btn-radio">
          <label for="t4">
            <input
              id="t4"
              class="only-sr"
              type="radio"
              name="time"
              value="120"
            />
            <span class="checkmark" />
            2분
          </label>
        </div>
        <div class="btn-radio">
          <label for="t5">
            <input
              id="t5"
              class="only-sr"
              type="radio"
              name="time"
              value="150"
            />
            <span class="checkmark" />
            2분 30초
          </label>
        </div>
      </section>
    );

    if (param === '스피드퀴즈') {
      return (
        <div className="setting">
          <div className="container-basic">
            <Link to="/">
              <p className="btn-top back">뒤로가기</p>
            </Link>
            <div className="info-text-wide">
              <div className="game-name">
                <h1>{param}</h1>
              </div>
              <div className="game-info">
                <h4>{explain}</h4>
                <br />
              </div>
              {selectTeam}
              {selectTime}
              <section class="radio-items">
                <div className="category-button">{category}</div>
              </section>
            </div>
          </div>
          <div className="btn-ready">
            <Link to="/speed" onClick={this.speed}>
              준비하기
              <div>
                <img src={arrow} alt="arrow" />
              </div>
            </Link>
          </div>
        </div>
      );
    } else if (param === '브랜드이름') {
      return (
        <div className="setting">
          <div className="container-basic">
            <Link to="/">
              <p className="btn-top back">뒤로가기</p>
            </Link>
            <div className="text-info-wide">
              <div className="game-name">
                <h1>{param}</h1>
              </div>
              <div className="game-info">
                <h4>{explain}</h4>
                <br />
              </div>
              {selectTeam}
              {selectTime}
              <div className="radio-items">
                <button
                  className="btn-fill level"
                  onClick={this.game1.bind(this)}>
                  쉬움
                </button>
                <button
                  className="btn-fill level"
                  onClick={this.game2.bind(this)}>
                  어려움
                </button>
              </div>
              <div className="btn-ready">
                <Link to="/Brand" onClick={this.brand}>
                  준비하기
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (param === '초성게임') {
      return (
        <div className="setting">
          <div className="container-basic">
            <Link to="/">
              <p className="btn-top back">뒤로가기</p>
            </Link>

            <div className="info-text-wide">
              <div className="game-name">
                <h1>{param}</h1>
              </div>
              <div className="game-info">
                <h4>{explain}</h4>
                <br />
              </div>
              {selectTeam}
              {selectTime}
              <div className="btn-ready">
                <Link to="/korean" onClick={this.korean}>
                  준비하기
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Setting;
