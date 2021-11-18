import React, { useState } from 'react';
import '../../../styles/reset.scss';
import './MainSungjae.scss';

import AsideSungjae from './Aside/AsideSungjae';
import Nav from '../../../components/Nav/Nav';

function MainSungjae(props) {
  const [댓글, 댓글변경] = useState('');
  const [댓글들, 댓글들변경] = useState([]);
  console.log(댓글);
  console.log(댓글들);
  return (
    <div>
      {/* <!-- 네비게이션 바 --> */}
      <Nav />
      {/* <!-- 메인 페이지 --> */}
      <main className="main">
        {/* <!-- 메인 페이지 feed--> */}
        <div className="feed">
          <article className="feed-article">
            <div className="user">
              <div className="profile">
                <img src="images/Sungjae/Main/profile.jpeg" />
                <h3>hwang.325</h3>
              </div>
              <div>
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>

            <img src="images/Sungjae/Main/feed.jpeg" />

            <div className="feed-article-icons">
              <div className="left">
                <i className="far fa-heart fa-lg icon" />
                <i className="far fa-comment fa-lg icon" />
                <i className="far fa-paper-plane fa-lg icon" />
              </div>
              <div className="right">
                <i className="far fa-bookmark fa-lg" />
              </div>
            </div>

            <div className="feed-article-like">
              <div>
                <img src="images/Sungjae/Main/wecode.jpeg" />
              </div>
              <h3 className="bold-font">wecode-bootcamp</h3>
              <h3>님</h3>
              <h3 className="bold-font">외 10명</h3>
              <h3>이 좋아합니다</h3>
            </div>

            <div className="feed-article-posting">
              <div className="username">hwang.325</div>
              <div>밖에 나가서 그냥 달리고 싶다. ㅇㅈ? 아 그리고...</div>
              <div className="more">더 보기</div>
            </div>

            <div className="feed-article-comment">
              <div className="leftbox">
                <div className="leftbox-username">wecode-bootcamp</div>
                <div className="leftbox-article">야ㅋㅋ 까불지마</div>
              </div>
              <div className="icon">
                <i className="far fa-heart" />
              </div>
            </div>

            {댓글들.map(function (데이터, i) {
              return (
                <div className="newcomment">
                  <div className="leftbox">
                    <div className="leftbox-username">wecode-bootcamp</div>
                    <div className="leftbox-article">{데이터}</div>
                  </div>
                  <div className="icon">
                    <i className="far fa-heart" />
                  </div>
                </div>
              );
            })}

            <div className="feed-article-time">42분전</div>

            <div className="feed-comment-add">
              <input
                value={댓글}
                type="text"
                placeholder="댓글 달기..."
                onChange={event => {
                  댓글변경(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  댓글들변경([...댓글들, 댓글]);
                  댓글변경('');
                }}
              >
                게시
              </button>
            </div>
          </article>
        </div>

        {/* <!-- 위에 메인페이지 왼쪽, 아래 메인페이지 오른쪽--> */}
        <AsideSungjae />
      </main>
    </div>
  );
}

export default MainSungjae;
