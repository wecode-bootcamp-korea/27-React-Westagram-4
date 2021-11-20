import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './LoginSoyoung.scss';

function LoginSoyoung(props) {
  const navigate = useNavigate();

  const idRef = useRef();
  const passwordRef = useRef();

  const [abel, setAbel] = useState('disabled');

  const goToMain = () => {
    navigate('/main-soyoung');
  };

  const handleValidInput = () => {
    const regExp =
      /^[0-9a-zA-Z]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    const idValue = idRef.current.value;
    const pwValue = passwordRef.current.value;

    const isIdValid = regExp.test(idValue);
    const isPwValid = pwValue.length >= 5;

    return isIdValid && isPwValid;
  };

  const onInput = () => {
    const isInputValid = handleValidInput();
    isInputValid ? setAbel(null) : setAbel('disabled');
  };

  return (
    <main id="main">
      <section className="login">
        <h1 id="westagramLogo">westagram</h1>
        <div className="formContainer">
          <form
            method="post"
            name="login"
            id="login"
            onInput={onInput}
            onSubmit={goToMain}
          >
            <input
              ref={idRef}
              type="text"
              name="email"
              size="20"
              id="userEmail"
              className="input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <p id="emailErrorMs" className="errorMs" />
            <input
              ref={passwordRef}
              type="password"
              name="password"
              size="20"
              id="userPw"
              className="input"
              placeholder="비밀번호"
            />
            <p id="pwErrorMs" className="errorMs" />
            <button type="submit" id="loginSubmitBtn" disabled={abel}>
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
