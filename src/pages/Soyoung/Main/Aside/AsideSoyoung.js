import React from 'react';
import { Link } from 'react-router-dom';

function AsideSoyoung(props) {
  return (
    <section id="aside">
      <div className="asideContainer">
        <div className="personal">
          <div className="userInfoBig">
            <Link to="/user/" className="profileLink avartar">
              <img
                alt="프로필로 이동"
                src="images/Soyoung/Main/main_profile.png"
              />
            </Link>
            <div className="desc info">
              <Link to="feed/user" className="id">
                cafeWeCoffee
              </Link>
              <Link to="feed/locator" className="nickName desc">
                위커피
              </Link>
            </div>
          </div>
          <button className="transBtn">전환</button>
        </div>
        <div className="recommend">
          <div className="title">
            <span>회원님을 위한 추천</span>
            <button type="button" className="moreBtn">
              모두 보기
            </button>
          </div>
          <ul className="lists">
            <li className="list">
              <div className="userInfoSmall">
                <Link to="/user/" className="profileLink avartar">
                  <img
                    alt="프로필로 이동"
                    src="images/Soyoung/Main/profile02.png"
                  />
                </Link>
                <div className="desc info">
                  <Link to="feed/user" className="id">
                    yourDiaryCoffee
                  </Link>
                  <div className="popular desc">인기</div>
                </div>
              </div>
              <button type="button" className="followBtn">
                팔로우
              </button>
            </li>
          </ul>
        </div>
        <footer>
          <nav className="footerNav">
            <ul className="items">
              <li className="item">
                <Link to="service/" target="_blank">
                  소개
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  도움말
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  홍보 센터
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  API
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  채용정보
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  개인정보처리방침
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  약관
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  위치
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  인기 계정
                </Link>
              </li>
              <li className="item">
                <Link to="service/" target="_blank">
                  해시 태그
                </Link>
              </li>
              <li className="item">
                <Link to="info/" href="" target="_blank">
                  언어
                </Link>
              </li>
            </ul>
          </nav>
          <p className="copylight">© 2021 Westagram from Meta</p>
        </footer>
      </div>
    </section>
  );
}

export default AsideSoyoung;
