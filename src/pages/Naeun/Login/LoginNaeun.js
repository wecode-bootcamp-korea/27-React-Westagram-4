import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginNaeun.scss';

function LoginNaeun() {
  const navigate = useNavigate();

  const [inputIdValue, OnChangeInputIdValue] = useState('');
  const [inputPasswordValue, OnChangeInputPasswordValue] = useState('');

  function InputId(event) {
    OnChangeInputIdValue(event.target.value);
  }
  function InputPassword(event) {
    OnChangeInputPasswordValue(event.target.value);
  }

  function goToMain() {
    if (inputIdValue.includes('@') && inputPasswordValue.length >= 5) {
      fetch('http://10.58.4.229:8000/users/login', {
        method: 'POST',
        body: JSON.stringify({
          name: '박진성',
          email: inputIdValue,
          password: inputPasswordValue,
          phone: '01012313211',
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message) {
            navigate('/main-naeun');
          } else {
            alert('dfasdfasdf');
          }
        });
    } else {
      alert('가입된 회원이 아닙니다!');
    }
  }

  function getIsActive() {
    return inputIdValue.includes('@') && inputPasswordValue.length >= 5;
  }

  function handleButtonAction() {
    return getIsActive() ? 'submit-button-action' : 'submit-button';
  }

  return (
    <div className="loginNaeun">
      <div className="container-top">
        <div className="westagram">
          <h1>westagram</h1>
        </div>
        <form className="login-form">
          <input
            onChange={InputId}
            onKeyUp={getIsActive}
            className="id-form"
            type="text"
            name="Id"
            required
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={InputPassword}
            onKeyUp={getIsActive}
            className="password-form"
            type="password"
            name="Password"
            required
            minLength="5"
            placeholder="비밀번호"
          />
          <button
            onClick={goToMain}
            className={handleButtonAction()}
            type="button"
            disabled={!getIsActive()}
          >
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
            <img src="/images/Naeun/Login/face-book.png" />
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
            <img src="/images/Naeun/Login/apple-download.png" />
          </div>
          <div className="container-second-google">
            <img src="/images/Naeun/Login/google-play.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginNaeun;
