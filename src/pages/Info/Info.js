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

const Title = styled.h1`
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 400;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2eb299;
`;

const Article = styled.h4`
  font-family: NotoSansCJKkr;
  font-size: 13px;
  width: 45%;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.62;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const Line = styled.div`
  border-radius: 6px;
  width: 70%;
  border: solid 1px transparent;
  background-image: linear-gradient(#fe565d, #7fe5ce),
    linear-gradient(307deg, #fe565d, #7fe5ce);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 50px;
`;

const Text = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 13px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fd575f;
  margin-top: 2vh;
  margin-left: 3vh;
`;

class Info extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/">
          <Text>뒤로가기</Text>
        </Link>
        <Flex center full column>
          <Title>서비스 소개</Title>
          <Article>
            브랜드 카테고리가 제시됩니다. 팀원 한명씩 돌아가며 관련된 브랜드명을
            말 해주세요. 패스시 3초씩 시간이 줄어들며, 제한시간내에 브랜드명을
            많이 맞추는 팀이 승리합니다. 브랜드 카테고리가 제시됩니다. 팀원
            한명씩 돌아가며 관련된 브랜드명을 말 해주세요. 패스시 3초씩 시간이
            줄어들며, 제한시간내에 브랜드명을 많이 맞추는 팀이 승리합니다.
          </Article>
          <Line />
          <Title>제작</Title>
          <Article>
            NEXTERS 9TH | team null, 김민영 신현식 김현규 김대경 장승훈
            <br />
            Copyright 2018. NEXTERS all rights reserved.
          </Article>
        </Flex>
      </Fragment>
    );
  }
}

export default Info;
