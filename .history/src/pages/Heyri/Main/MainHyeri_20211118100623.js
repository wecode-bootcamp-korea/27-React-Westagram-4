import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from '../Main/Aside/AsideHyeri';
import '../Main/MainHyeri.scss';

function MainHyeri() {
  return (
    <main className="main">
      <Nav />
      <main className="mainTitle">
        <div className="Feed">
          <div className="divFeeds">
            <article className="article">
              <nav className="nav2">
                <div className="logoText">
                  <img
                    className="myProfileLogo"
                    src="/images/gom.png"
                    alt="gom"
                  />
                  <div className="myProfileLogoText">kimel_khr</div>
                </div>
                <div>
                  <img
                    className="dot"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                    alt=""
                  />
                </div>
              </nav>
            </article>
            <div className="mainPicture">
              <div className="mainPicture0">
                <img
                  className="mainPicture1"
                  src="./Hyeri/images/img6.png"
                  alt="zbr2"
                />
              </div>
            </div>
            <div className="MainStatus">
              <div className="status">
                <div className="status1">
                  <img
                    className="status1-child"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="bigHeart"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                    alt="comment"
                  />
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    className="paper"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
                <div className="status2">
                  <img
                    className="status3"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                    alt="bookMark"
                  />
                </div>
              </div>
              <div className="likeNum">좋아요 1504개</div>
              <div className="textId">
                <span className="text1">kimel_khr</span>
                <span className="text2">
                  안녕하세요 여러분 모두 반가워요 😃
                </span>
              </div>
              <div className="textCommentNum">댓글 132개 모두 보기</div>
              <div className="reply">
                <div className="textCommentGrop">
                  <span className="textGrop">
                    <span className="text1">rlagpfl08</span>
                    <span className="text2">안녕하세요 기멜님!</span>
                  </span>
                  <div className="box">
                    <i className="far fa-heart" onclick="fillHeart(this)"></i>
                  </div>
                </div>
              </div>
              <div className="text4">3시간 전</div>
            </div>
            <div className="button1">
              <input
                className="button2"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="button3">게시</button>
            </div>
          </div>
        </div>
        <Aside />
      </main>
    </main>
  );
}

export default MainHyeri;
