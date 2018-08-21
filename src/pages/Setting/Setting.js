import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Setting.css';
import arrow from '../../assets/P03_setting/icon_scrolldownarrow.png';
import axios from 'axios';


class Setting extends Component {

  state = {
    easy: '',
    difficult: '',
    team: '',
    list: [],
    categoryId: '',

  };


  componentDidMount() {
    axios.get(`http://nexters-env-1.upmjem4hcw.us-east-2.elasticbeanstalk.com/api/category/1`).then(
      r => {
        this.setState({ list: r.data });

      }
    )
  }


  category = (event) => {
    let target = event.target;
    let id = target.id;

    let i = this.state.categoryId;
    if (i == '') {
      i += id;
    }
    else {
      i += ",";
      i += id;
    }

    this.setState({ categoryId: i });

  };

  game1 = () => {
    localStorage.setItem('difficulty', 1);
  };

  game2 = () => {
    localStorage.setItem('difficulty', 2);
  };

  speed = () => {
    localStorage.setItem("category", this.state.categoryId);

  };

  render() {
    let explain = localStorage.getItem('explain');
    let param = localStorage.getItem('game');
    let team = '';
    console.log(this.state.categoryId);


    var s = JSON.stringify(this.state.list);
    var s1 = JSON.parse(s);

    let category = s1.map(list =>
      <button class="checkbox" id={list.id} onClick={this.category.bind(this)}>
        <div className="button" id={list.id}>{list.name}</div>
      </button>);

    if (param === "스피드퀴즈") {
      return (

        <div className="setting">
          <div className="header">
            <Link to="/">
              <p className="text">뒤로가기</p>
            </Link>
          </div>
          <article>
            <p className="game-name">{param}</p>
            <div className="game-info">
              {explain}
              <br />
            </div>
            <section class="radio-items">
              <div class="radio-btn">
                <input
                  id="b1"
                  class="only-sr checked"
                  type="radio"
                  name="temp2"
                  value="1"
                  checked
                />
                <label for="b1">30초</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b2"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="2"
                />
                <label for="b2">1분</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b3"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="3"
                />
                <label for="b3">1분 30초</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b4"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="4"
                />
                <label for="b4">2분</label>
              </div>
            </section>
            <div className="next-btn">

              <div className="home-button">

                {category}

              </div>
            </div>
            <Link to="/Speed" onClick={this.speed}>
              <p>준비하기</p>
              <img src={arrow} alt="" />
            </Link>

          </article>
        </div >
      );
    }
    else if (param === "브랜드이름") {
      return (

        <div className="setting">
          <div className="header">
            <Link to="/">
              <p className="text">뒤로가기</p>
            </Link>
          </div>
          <article>
            <p className="game-name">{param}</p>
            <div className="game-info">
              {explain}
              <br />
            </div>
            <section class="radio-items">
              <div class="radio-btn">
                <input
                  id="b1"
                  class="only-sr checked"
                  type="radio"
                  name="temp2"
                  value="1"
                  checked
                />
                <label for="b1">30초</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b2"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="2"
                />
                <label for="b2">1분</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b3"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="3"
                />
                <label for="b3">1분 30초</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b4"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="4"
                />
                <label for="b4">2분</label>
              </div>
            </section>

            <div className="home-button">

              <button className="button" onClick={this.game1}>쉬움</button>



              <button className="button" onClick={this.game2}>어려움</button>


            </div>
            <div className="next-btn">
              <Link to="/Brand">
                <p>준비하기</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </article>
        </div >
      );
    }

    else if (param === "초성게임") {
      return (

        <div className="setting">
          <div className="header">
            <Link to="/">
              <p className="text">뒤로가기</p>
            </Link>
          </div>
          <article>
            <p className="game-name">{param}</p>
            <div className="game-info">
              {explain}
              <br />
            </div>
            <section class="radio-items">
              <div class="radio-btn">
                <input
                  id="b1"
                  class="only-sr checked"
                  type="radio"
                  name="temp2"
                  value="1"
                  checked
                />
                <label for="b1">30초</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b2"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="2"
                />
                <label for="b2">1분</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b3"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="3"
                />
                <label for="b3">1분 30초</label>
              </div>
              <div class="radio-btn">
                <input
                  id="b4"
                  class="only-sr"
                  type="radio"
                  name="temp2"
                  value="4"
                />
                <label for="b4">2분</label>
              </div>
            </section>




            <div className="next-btn">
              <Link to="/Korean">
                <p>준비하기</p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </article>
        </div >
      );
    }
  }
};

export default Setting;
