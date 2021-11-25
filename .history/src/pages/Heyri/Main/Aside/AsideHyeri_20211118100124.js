import React from 'react';
import './AsideHyeri.scss';
import '../../../../styles/common.scss';

function AsideHyeri() {
  return (
    <div className="Aside">
      <div className="right">
        <div className="divMainRight">
          <div className="profile1">
            <img
              className="profile2"
              src="/images/icon-profile.jpg"
              alt="profile"
            />
            <div className="profileName">
              <div className="profileText1">kimel_khr</div>
              <div className="profileText2">KIMEL/기멜</div>
            </div>
          </div>
          <div className="story1">
            <div className="story1-story">
              <div className="story1Text1">스토리</div>
              <button className="story1Text2">모두 보기</button>
            </div>
            <div className="peopleProfile">
              <div className="peopleProfileDetail">
                <div>
                  <img
                    className="myProfileLogo"
                    src="/images/img3.png"
                    alt="img3"
                  />
                </div>
                <div className="peopleStoryCircle">
                  <div className="peopleId">aorixx</div>
                  <div className="textHour">3시간 전</div>
                </div>
              </div>
              <div className="peopleProfileDetail">
                <div>
                  <img
                    className="myProfileLogo"
                    src="/images/img4.png"
                    alt="img4"
                  />
                </div>
                <div className="peopleStoryCircle">
                  <div className="peopleId">noon.soup</div>
                  <div className="textHour">8시간 전</div>
                </div>
              </div>
              <div className="peopleProfileDetail">
                <div>
                  <img
                    className="myProfileLogo"
                    src="/images/img5.png"
                    alt="img5"
                  />
                </div>
                <div className="peopleStoryCircle">
                  <div className="peopleId">flower.hour</div>
                  <div className="textHour">4시간 전</div>
                </div>
              </div>
              <div className="peopleProfileDetail">
                <div>
                  <img
                    className="myProfileLogo"
                    src="/images/zbr1.png"
                    alt="img6"
                  />
                </div>
                <div className="peopleStoryCircle">
                  <div className="peopleId">se_ddallem</div>
                  <div className="textHour">4시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommendForm">
          <div className="recommendInput">
            <div className="recommendToYou">회원님을 위한 추천</div>
            <div className="reTogether">모두 보기</div>
          </div>
          <div className="people">
            <div>
              <img
                className="peopleImage"
                src="/images/img0.png"
                alt="people0"
              />
            </div>
            <div className="peopleId">
              _daldiary
              <div className="peopleFollowYou">
                choco님 외 10명이 팔로우 합니다
              </div>
            </div>
            <button className="follow0">팔로우</button>
          </div>
          <div className="people">
            <div>
              <img
                className="peopleImage"
                src="/images/img1.png"
                alt="people0"
              />
            </div>
            <div className="peopleId">
              myamya_yaya
              <div className="peopleFollowYou">
                hwa.16님 외 3명이 팔로우합니다
              </div>
            </div>
            <button className="follow1">팔로우</button>
          </div>
          <div className="people">
            <div>
              <img className="peopleImage" src="/images/zbr0.png" alt="zbr0" />
            </div>
            <div className="peopleId">
              book_truck
              <div className="peopleFollowYou">instagram 신규 가입</div>
            </div>
            <button className="follow2">팔로우</button>
          </div>
        </div>
        <footer className="info">
          <a href="" className="i">
            소개
          </a>
          <p>·</p>
          <a href="" className="i">
            도움말
          </a>
          <p>·</p>
          <a href="" className="i">
            홍보 센터
          </a>
          <p>·</p>
          <a href="" className="i">
            API
          </a>
          <p>·</p>
          <a href="" className="i">
            채용 정보
          </a>
          <p>·</p>
          <a href="" className="i">
            개인정보처리방침
          </a>
          <p>·</p>
          <a href="" className="i">
            약관
          </a>
          <p>·</p>
          <a href="" className="i">
            위치
          </a>
          <p>·</p>
          <a href="" className="i">
            인기
          </a>
          <p>·</p>
          <a href="" className="i">
            계정
          </a>
          <p>·</p>
          <a href="" className="i">
            해시태그
          </a>
          <p>·</p>
          <a href="" className="i">
            언어
          </a>
          <p className="info1">© 2021 INSTAGRAM FROM KIMHYERI</p>
        </footer>
      </div>
    </div>
  );
}

export default AsideHyeri;
