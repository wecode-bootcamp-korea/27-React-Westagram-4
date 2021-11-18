import React from 'react';
import './LoginNaeun.scss';

function LoginNaeun() {
  return (
    <div className="container">
      <div className="container-top">
        <div className="instagram">
          <h1>Westagram</h1>
        </div>
        <form className="login-form">
          <input
            className="id-form"
            type="text"
            required
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="password-form"
            type="password"
            required
            minLength="5"
            placeholder="비밀번호"
          />
          <button className="submit-button" type="submit" disabled="disabled">
            로그인
          </button>
        </form>
        <div className="middle-bar">
          <span className="middle-bar-line-left"></span>
          <span className="middle-bar-message">또는</span>
          <span className="middle-bar-line-right"></span>
        </div>
        <div className="facebook-login">
          <span className="facebook-login-message">
            <img src="/images/face-book.png" />
            Facebook으로 로그인
          </span>
        </div>
        <div className="forget-password">
          <span className="forget-password-message">
            비밀번호를 잊으셨나요?
          </span>
        </div>
      </div>
      <div className="container-middle">
        <div className="making-account">
          <span className="making-account-message">
            계정이 없으신가요?&nbsp;
            <span className="blue-letter">가입하기</span>
          </span>
        </div>
      </div>
      <div className="container-bottom">
        <div className="container-bottom-first">
          <span className="container-bottom-first-message">
            앱을 다운로드하세요.
          </span>
        </div>
        <div className="container-bottom-second">
          <div className="container-second-apple">
            <img src="/images/apple-download.png" />
          </div>
          <div className="container-second-google">
            <img src="/images/google-play.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginNaeun;
