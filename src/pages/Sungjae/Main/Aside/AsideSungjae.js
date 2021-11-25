import React from 'react';
import '../../../../styles/reset.scss';
import './AsideSungjae.scss';

function AsideSungjae(props) {
  return (
    <aside className="main-right">
      <div className="main-right-channel">
        <img src="images/Sungjae/Main/wecode.jpeg" />
        <div className="title">
          <h4>wecode-bootcamp</h4>
          <h3>WeCode ㅣ 위코드</h3>
        </div>
      </div>

      {/* <!-- 위에 메인페이지 오른쪽에 채널--> */}

      <div className="main-right-story">
        <nav className="main-right-story-nav">
          <div className="left">스토리</div>
          <div className="right">모두보기</div>
        </nav>

        <div className="main-right-story-channel">
          <div className="main-right-story-channel-icons">
            <img src="images/Sungjae/Main/wecode.jpeg" />
            <div className="main-right-story-channel-icons-title">
              <h4>wecode-bootcamp</h4>
              <h3>12분전</h3>
            </div>
          </div>

          <div className="main-right-story-channel-icons">
            <div className="main-right-story-channel-icons-img">
              <img src="images/Sungjae/Main/wecode.jpeg" />
            </div>
            <div className="main-right-story-channel-icons-title">
              <h4>wecode-bootcamp</h4>
              <h3>36분전</h3>
            </div>
          </div>

          <div className="main-right-story-channel-icons">
            <div className="main-right-story-channel-icons-img">
              <img src="images/Sungjae/Main/wecode.jpeg" />
            </div>
            <div className="main-right-story-channel-icons-title">
              <h4>wecode-bootcamp</h4>
              <h3>57분전</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 위에 메인페이지 오른쪽에 스토리--> */}

      <div className="main-right-recommend">
        <nav className="main-right-recommend-nav">
          <div className="left">회원님을 위한 추천</div>
          <div className="right">모두보기</div>
        </nav>

        <div className="main-right-recommend-channel">
          <div className="main-right-recommend-channel-icons">
            <div className="main-right-recommend-channel-icons-img">
              <img src="images/Sungjae/Main/wecode.jpeg" />
            </div>
            <div className="main-right-recommend-channel-icons-title">
              <div>
                <h4>wecode-bootcamp</h4>
                <h3>seong-jae12님 외 7명이 ...</h3>
              </div>
              <div>팔로우</div>
            </div>
          </div>

          <div className="main-right-recommend-channel-icons">
            <img src="images/Sungjae/Main/wecode.jpeg" />
            <div className="main-right-recommend-channel-icons-title">
              <div>
                <h4>wecode-bootcamp</h4>
                <h3>Woo-ng1324님 외 3명이 ...</h3>
              </div>
              <div>팔로우</div>
            </div>
          </div>

          <div className="main-right-recommend-channel-icons">
            <div className="main-right-recommend-channel-icons-img">
              <img src="images/Sungjae/Main/wecode.jpeg" />
            </div>
            <div className="main-right-recommend-channel-icons-title">
              <div>
                <h4>wecode-bootcamp</h4>
                <h3>yeah---234님 외 12명이 ...</h3>
              </div>
              <div>팔로우</div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 위에 메인페이지 오른쪽에 채널추천--> */}

      <footer className="main-right-footer">
        <div className="main-right-footer-article">
          <h5>Instagram 정보, 지원, 홍보센터, API</h5>
          <h5>채용정보, 개인정보처리방침, 약관</h5>
          <h5>디렉터리, 프로필, 해시태그, 언어</h5>
        </div>

        <div className="margin-right-footer-copyright">
          copyright 2019. INSTAGRAM
        </div>
      </footer>
      {/* 위에 footer  */}
    </aside>
  );
}

export default AsideSungjae;
