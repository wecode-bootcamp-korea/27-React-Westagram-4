import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import InputHyeri from './Input/InputHyeri';
import './LoginHyeri.scss';

function LoginHyeri() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hyeri');
  };

  let [idValue, setIdInput] = useState({
    id: '',
    pw: '',
  });
  console.log(idValue);

  const handleIdInput = e => {
    const { name, value } = e.target;
    setIdInput({ ...idValue, [name]: value });
  };

  return (
    <>
      <section className="login">
        <form action="" method="post" className="loginForm">
          <h1>Westagram</h1>
          {/* <InputHyeri /> */}
          <div className="idForm">
            <input
              type="text"
              id="id"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
          </div>
          <div className="passForm">
            <input
              type="password"
              id="pw"
              name="pw"
              placeholder="비밀번호"
              onChange={handleIdInput}
            />
          </div>
          <button type="button" id="loginBtn" onClick={goToMain} name="">
            로그인
          </button>
          <div className="bottomText">비밀번호를 잊으셨나요?</div>
        </form>
      </section>
    </>
  );
}

export default LoginHyeri;
