import React from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import InputHyeri from './Input/InputHyeri';
import './LoginHyeri.scss';

function LoginHyeri() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hyeri');
  };
  return (
    <>
      <section className="login">
        <form action="" method="post" className="loginForm">
          <h1>Westagram</h1>
          <InputHyeri />
          <button type="button" id="loginBtn" onClick={goToMain}>
            로그인
          </button>
          <div className="bottomText">비밀번호를 잊으셨나요?</div>
        </form>
      </section>
    </>
  );
}

export default LoginHyeri;
