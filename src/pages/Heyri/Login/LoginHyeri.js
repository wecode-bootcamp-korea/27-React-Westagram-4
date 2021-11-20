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

  let [idValue, setIdInput] = useState('');
  let [pwValue, setPwInput] = useState('');
  console.log(idValue);
  console.log(pwValue);

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   setIdInput({ ...idValue, [name]: value });
  // };

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
              onChange={e => {
                setIdInput(e.target.value);
              }}
            />
          </div>
          <div className="passForm">
            <input
              type="password"
              id="pw"
              name="pw"
              placeholder="비밀번호"
              onChange={e => {
                setPwInput(e.target.value);
              }}
            />
          </div>

          {idValue.includes('@') && pwValue.length >= 5 ? (
            <button
              type="button"
              id="loginBtn"
              onClick={goToMain}
              name=""
              style={{ backgroundColor: '#0095f6' }}
            >
              로그인
            </button>
          ) : (
            <button
              type="button"
              id="loginBtn"
              onClick={goToMain}
              name=""
              style={{ backgroundColor: '#b5d7fa' }}
            >
              로그인
            </button>
          )}

          <div className="bottomText">비밀번호를 잊으셨나요?</div>
        </form>
      </section>
    </>
  );
}

export default LoginHyeri;
