import React from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../Login/';

function IdForm() {
  return (
    <div className="idForm">
      <input
        type="text"
        id="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
    </div>
  );
}

function PassForm() {
  return (
    <div className="passForm">
      <input type="password" id="pw" placeholder="비밀번호" />
    </div>
  );
}

function LoginBtn() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  return (
    <button type="button" id="loginBtn" onClick={goToMain}>
      로그인
    </button>
  );
}

function LoginForm() {
  return (
    <form action="" method="post" className="loginForm">
      <h1>Westagram</h1>
      <IdForm />
      <PassForm />
      {/* <Link to="/main">
      <button type="button" id="btn" onclick="loginBtn()">
        로그인
      </button>
      </Link> */}
      <LoginBtn />
      <div className="bottomText">비밀번호를 잊으셨나요?</div>
    </form>
  );
}

function LoginHyeri() {
  return (
    <>
      <section className="login">
        <LoginForm />
      </section>
    </>
  );
}

export default LoginHyeri;
