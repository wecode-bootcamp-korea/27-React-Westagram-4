import React from 'react';
import './AsideNaeun.scss';

function AsideNaeun(props) {
  return (
    <>
      <main className="AsideNaeun">
        <div className="main-second">
          <div className="main-left-box">
            <div className="main-left-box-myAccount">
              <div className="id-and-nickname">
                <img src="/images/Naeun/Main/naeun.jpg" />
                <div className="id">naniboo_o</div>
                <div className="nickname">나은</div>
              </div>
              <div className="changing-account">
                <span>전환</span>
              </div>
            </div>
          </div>
          <div className="recommendation">
            <div className="recommendation-message">회원님을 위한 추천</div>
            <div className="more">모두 보기</div>
          </div>
          <div className="recommendation-list">
            <div className="recommendation-list-compact">
              <img src="/images/Naeun/Main/cotton.jpg" />
              <div className="recommendation-id-and-nickname">
                <div className="recommendation-id-one">mokhwa_love.s2</div>
                <div className="recommendation-id-message">목화</div>
              </div>
              <div className="follow-id">팔로우</div>
            </div>
            <div className="recommendation-list-compact">
              <img src="/images/Naeun/Main/animal.jpg" />
              <div className="recommendation-id-and-nickname">
                <div className="recommendation-id-two">yojuyoon</div>
                <div className="recommendation-id-message">추천됨</div>
              </div>
              <div className="follow-id">팔로우</div>
            </div>
            <div className="recommendation-list-compact">
              <img src="/images/Naeun/Main/back.JPG" />
              <div className="recommendation-id-and-nickname">
                <div className="recommendation-id-three">muzmuu</div>
                <div className="recommendation-id-message">추천됨</div>
              </div>
              <div className="follow-id">팔로우</div>
            </div>
            <div className="recommendation-list-compact">
              <img src="/images/Naeun/Main/background.jpg" />
              <div className="recommendation-id-and-nickname">
                <div className="recommendation-id-four">kjj_0508</div>
                <div className="recommendation-id-message">
                  회원님을 팔로우 합니다
                </div>
              </div>
              <div className="follow-id">팔로우</div>
            </div>
            <div className="recommendation-list-compact">
              <img src="/images/Naeun/Main/gangreung.JPG" />
              <div className="recommendation-id-and-nickname">
                <div className="recommendation-id-five">kimhr08</div>
                <div className="recommendation-id-message">
                  회원님을 위한 추천
                </div>
              </div>
              <div className="follow-id">팔로우</div>
            </div>
            <div className="main-left-bottom-box">
              <div className="first-line">
                <div>소개</div>
                <div>도움말</div>
                <div>홍보 센터</div>
                <div>API</div>
                <div>채용 정보</div>
                <div>개인정보처리방침</div>
              </div>
              <div className="second-line">
                <div>약관</div>
                <div>위치</div>
                <div>인기 계정</div>
                <div>해시태그</div>
                <div>언어</div>
              </div>
              <div className="westagram-co">
                <div>© 2021 INSTAGRAM FROM META</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AsideNaeun;
