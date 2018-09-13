import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../img/img_logo.png';
import Flex, { FlexItem } from 'styled-flex-component';
import '../Css/Home.css';

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
        const url = 'http://localhost:8080/nullBox';
        axios
            .get(
                url + `/api/list`
            )
            .then(r => {
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

        return (
            <Fragment>
                <Flex center full column>
                    <div className="container-basic">
                        <Link to="/Info">
                            <p className="btn-top inform">서비스 소개</p>
                        </Link>
                        <p>
                            <img src={logo} alt="logo" className="logo" />
                        </p>
                        <p className="main-text" /> /*바로가기 잠시지움*/
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
                        <p className="btn-more">더 많은 게임 보기</p>
                    </div>
                </Flex>
            </Fragment>
        );
    }
}

export default Home;
