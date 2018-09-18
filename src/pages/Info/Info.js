import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Info extends Component {
  render() {
    return (
      <Fragment>
        <Flex center full column>
          <div className="container-basic">
            <Link to="/">
              <p className="btn-top back">뒤로가기</p>
            </Link>
            <div className="info-text">
              <h1>서비스 소개</h1>
              <h4>
                지인들과 즐거운 추억을 만들기 위해 혹은 처음만난 사람들과
                어색함을 허물고자 단체게임을 했던 경험이 있으실 겁니다. 예능
                프로그램에서 자주 접하지만 게임을 준비하는 것은 생각보다 귀찮고
                어렵습니다. 다양한 문제들을 조사하여 적어가야 합니다.
                <br />
                플레이잇이 귀찮은 일을 대신하겠습니다. 여러분들의 시간이 더욱
                즐겁기를 바랍니다 :D
              </h4>
            </div>
            <div className="line" />
            <div className="info-text">
              <h4>
                NEXTERS 13TH | team NULL 김대경 김민영 김현규 신현식 장승훈
                <br />
                Copyright 2018. NEXTERS all rights reserved.
              </h4>
            </div>
          </div>
        </Flex>
      </Fragment>
    );
  }
}

export default Info;
