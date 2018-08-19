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

  };


  componentDidMount() {

    axios.get(`http://nexters-env-1.upmjem4hcw.us-east-2.elasticbeanstalk.com//api/category/3/1`).then(
      r => {
        this.setState({ easy: r.data });
      }

    )

    axios.get(`http://nexters-env-1.upmjem4hcw.us-east-2.elasticbeanstalk.com//api/category/3/2`).then(
      r => {
        this.setState({ difficult: r.data });
      }

    )


  }

  game1 = () => {
    localStorage.setItem('list', this.state.easy);
    localStorage.setItem('difficulty', 1);
  };

  game2 = () => {
    localStorage.setItem('list', this.state.difficult);
    localStorage.setItem('difficulty', 2);

  };

  render() {


    return (
      <Fragment>
        <Flex center full column>
          <Link to="/">
            <p className="text">뒤로가기</p>
          </Link>

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
