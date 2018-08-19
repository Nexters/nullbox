import React from 'react';
import { Link } from 'react-router-dom';
import './Setting.css';
import arrow from '../../assets/P03_setting/icon_scrolldownarrow.png';


const Setting = ({ match }) => {

  let explain = localStorage.getItem('explain');
  let param = match.params.subjects;

  if (param === "스피드게임") {
    return (

      <div className="setting">
        <div className="header">
          <Link to="/">
            <p className="text">뒤로가기</p>
          </Link>
        </div>
        <article>
          <p className="game-name">{match.params.subjects}</p>
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
            <Link to="/Speed">
              <p>준비하기</p>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </article>
      </div >
    );
  }
  else if (param === "브랜드게임") {
    return (

      <div className="setting">
        <div className="header">
          <Link to="/">
            <p className="text">뒤로가기</p>
          </Link>
        </div>
        <article>
          <p className="game-name">{match.params.subjects}</p>
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
            <Link to="/select">
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
          <p className="game-name">{match.params.subjects}</p>
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

};

export default Setting;
