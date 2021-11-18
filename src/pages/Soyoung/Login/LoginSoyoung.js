import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './LoginSoyoung.scss';

function LoginSoyoung(props) {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-soyoung');
  };

  return (
    <main id="main">
      <section className="login">
        <h1 id="westagramLogo">westagram</h1>
        <div className="formContainer">
          <form onSubmit={goToMain} method="post" name="login" id="login">
            <input
              type="text"
              name="email"
              size="20"
              id="userEmail"
              className="input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <p id="emailErrorMs" className="errorMs" />
            <input
              type="password"
              name="password"
              size="20"
              id="userPw"
              className="input"
              placeholder="비밀번호"
            />
            <p id="pwErrorMs" class="errorMs" />
            <button type="submit" id="loginSubmitBtn">
              로그인
            </button>
          </form>
        </div>
        <span className="lineOr">
          <span className="txt">또는</span>
        </span>
        <a href="https://ko-kr.facebook.com/" className="moveToFacebook">
          Facebook으로 로그인
        </a>
        <Link to="/find/password" className="moveToFindPw">
          비밀번호를 잊으셨나요?
        </Link>
      </section>
    </main>
  );
}

export default LoginSoyoung;
