import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../../styles/reset.scss';
import './LoginSungjae.scss';

function LoginSungjae(props) {
  const Navigate = useNavigate();

  const goToMain = () => {
    Navigate('/main-sungjae');
  };
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const [isCommentButtonActive, setIsCommentButtonActive] = useState('');

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  return (
    <main className="login-box">
      <div className="login-box-title">
        <h1 className="login-box-title-logo">Westagram</h1>
      </div>

      <div className="login-box-child">
        <div className="login-box-child-id">
          <input
            value={idInput}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={() => {
              idInput.includes('@') && pwInput.length >= 5
                ? setIsCommentButtonActive(true)
                : setIsCommentButtonActive(false);
            }}
          />
        </div>

        <div className="login-box-child-passsword">
          <input
            value={pwInput}
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={() => {
              {
                idInput.includes('@') && pwInput.length >= 5
                  ? setIsCommentButtonActive(true)
                  : setIsCommentButtonActive(false);
              }
            }}
          />
        </div>

        <div className="login-box-child-btn">
          <button
            onClick={goToMain}
            className={isCommentButtonActive ? 'activated' : 'deactivated'}
          >
            <span>로그인</span>
          </button>
        </div>
      </div>

      <div className="login-box-forgot">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}

export default LoginSungjae;
