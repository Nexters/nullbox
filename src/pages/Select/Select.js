import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/P01_main/img_logo.png';
import Flex, { FlexItem } from 'styled-flex-component';
import './Select.css';

import axios from 'axios';



class Select extends Component {


  state = {
    easy: '',
    difficult: '',
    team: '',

  };



  game1 = () => {

    localStorage.setItem('difficulty', 1);
  };

  game2 = () => {

    localStorage.setItem('difficulty', 2);

  };

  render() {
    console.log(this.value);

    return (
      <Fragment>
        <Flex center full column>
          <Link to="/">
            <p className="text">뒤로가기</p>
          </Link>

          <section class="radio-items">
            <h3 className="team_value">팀 수 </h3>
            <div class="radio-btn">

              <input
                id="b1"
                class="only-sr checked"
                type="radio"
                name="team"
                value="1"
                checked
              />
              <label for="b1">1</label>
            </div>
            <div class="radio-btn">
              <input
                id="b2"
                class="only-sr"
                type="radio"
                name="team"
                value="2"
              />
              <label for="b2">2</label>
            </div>
            <div class="radio-btn">
              <input
                id="b3"
                class="only-sr"
                type="radio"
                name="team"
                value="3"

              />
              <label for="b3">3</label>
            </div>
            <div class="radio-btn">
              <input
                id="b4"
                class="only-sr"
                type="radio"
                name="team"
                value="4"
              />
              <label for="b4">4</label>
            </div>
          </section>

          <p className="main-text">Select</p>
          <div className="home-button">
            <Link to="/Brand?1">
              <div className="button" onClick={this.game1}>쉬움</div>

            </Link>
            <Link to="/Brand?2">
              <div className="button" onClick={this.game2}>어려움</div>

            </Link>
          </div>
        </Flex>
      </Fragment>
    );
  }
}

export default Select;
