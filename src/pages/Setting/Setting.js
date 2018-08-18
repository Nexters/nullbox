import React from 'react';
import { Link } from 'react-router-dom';
import './Setting.css';

const Setting = ({ match }) => {
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
          2개의 초성이 제시됩니다. 제시한 초성과 일치하는 단어를 말해주세요.
          <br />
          제한시간 동안 가장 많은 단어를 이야기한 팀이 승리합니다.
        </div>
        <section class="radio-items">
          <div class="col-3">
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
          <div class="col-3">
            <input
              id="b2"
              class="only-sr"
              type="radio"
              name="temp2"
              value="2"
            />
            <label for="b2">1분</label>
          </div>
          <div class="col-3">
            <input
              id="b3"
              class="only-sr"
              type="radio"
              name="temp2"
              value="3"
            />
            <label for="b3">1분 30초</label>
          </div>
          <div class="col-3">
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
      </article>
    </div>
  );
};

export default Setting;
