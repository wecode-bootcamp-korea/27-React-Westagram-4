import React from 'react';
import '../../../styles/reset.scss';
import './MainSungjae.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faCompass,
  faHeart,
  faUser,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AsideSungjae from './Aside/AsideSungjae';
import Nav from '../../../components/Nav/Nav';

function MainSungjae(props) {
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
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>

            <img src="images/Sungjae/Main/feed.jpeg" />

            <div className="feed-article-icons">
              <div className="left">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  className="left-icon"
                />

                <FontAwesomeIcon
                  icon={faComment}
                  size="lg"
                  className="left-icon"
                />

                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="lg"
                  className="left-icon"
                />
              </div>
              <div className="right">
                <FontAwesomeIcon icon={faBookmark} size="lg" />
              </div>
            </div>

            <div className="feed-article-like">
              <div>
                <img src="images/Sungjae/Main/wecode.jpeg" />
              </div>
              <h3 className="bold-font">wecode_bootcamp</h3>
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
                <div className="leftbox-username">wecode_bootcamp</div>
                <div className="leftbox-article">야ㅋㅋ 까불지마</div>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>

            <div className="newcomment"></div>

            <div className="feed-article-time">42분전</div>

            <div className="feed-comment-add">
              <input type="text" placeholder="댓글 달기..." />
              <button>게시</button>
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
