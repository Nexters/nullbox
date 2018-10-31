import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../img/img_logo.png';
import arrow from '../../img/icon_scrolldownarrow.png';
import Flex, { FlexItem } from 'styled-flex-component';
import '../Css/Home.css';
import '../Css/Firework.css';
import { URL } from '../url';
import axios from 'axios';

class Home extends Component {
  state = {
    game1: '',
    game2: '',
    game3: '',
    explain1: '',
    explain2: '',
    explain3: '',
  };

  componentDidMount() {
    const url = URL;
    axios.get(url + `/api/list`).then(r => {
      this.setState({ game1: r.data[0].name });
      this.setState({ game2: r.data[1].name });
      this.setState({ game3: r.data[2].name });
      this.setState({ explain1: r.data[0].explain });
      this.setState({ explain2: r.data[1].explain });
      this.setState({ explain3: r.data[2].explain });
    });
  }

  game1 = () => {
    localStorage.setItem('explain', this.state.explain1);
    localStorage.setItem('game', this.state.game1);
  };
  game2 = () => {
    localStorage.setItem('explain', this.state.explain2);
    localStorage.setItem('game', this.state.game2);
  };
  game3 = () => {
    localStorage.setItem('explain', this.state.explain3);
    localStorage.setItem('game', this.state.game3);
  };

  render() {
    localStorage.setItem('Acount', '');
    localStorage.setItem('Bcount', '');
    localStorage.setItem('Ccount', '');
    localStorage.setItem('Dcount', '');
    localStorage.setItem('Ecount', '');
    localStorage.setItem('Apass', '');
    localStorage.setItem('Bpass', '');
    localStorage.setItem('Cpass', '');
    localStorage.setItem('Dpass', '');
    localStorage.setItem('Epass', '');

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
    return (
      <Fragment>
        <span class="svg2">{firwork}</span>
        <span class="svg3">{firwork}</span>
        <Flex center full column>
          <div className="container-main">
            <Link to="/Info">
              <p className="btn-top inform">서비스 소개</p>
            </Link>
            <span class="svg">{firwork}</span>
            <span class="svg1">{firwork}</span>
            <p>
              <img src={logo} alt="logo" className="logo" />
            </p>
            <p className="main-text"> 바로가기</p>
            <div className="home-button">
              <Link to="/Setting/스피드게임">
                <div className="btn home" onClick={this.game1}>
                  {this.state.game1}
                </div>
              </Link>
              <Link to="/Setting/초성게임">
                <div className="btn home" onClick={this.game2}>
                  {this.state.game2}
                </div>
              </Link>
              <Link to="/Setting/브랜드게임">
                <div className="btn home" onClick={this.game3}>
                  {this.state.game3}
                </div>
              </Link>
            </div>

            {/*<p className="btn-more">
                            더 많은 게임 보기</p>
                        <p className="btn-more-next">
                            <img src={arrow} alt="ic_scrolldownarrow" />
                        </p>
        */}
          </div>
        </Flex>
      </Fragment>
    );
  }
}

export default Home;
