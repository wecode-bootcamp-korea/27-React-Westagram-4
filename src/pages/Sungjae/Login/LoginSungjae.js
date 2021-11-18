import React from 'react';
import '../../../styles/reset.scss';
import './LoginSungjae.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginSungjae(props) {
  const Navigate = useNavigate();

  const goToMain = () => {
    Navigate('/main-sungjae');
  };
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  console.log({ idInput });
  console.log({ pwInput });
  const [btnValidation, setBtnValidation] = useState('false');

  console.log(btnValidation);

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
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
        </div>

        <div className="login-box-child-passsword">
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
        </div>

        <div className="login-box-child-btn">
          {idInput.includes('@') === true && pwInput.length >= 5 ? (
            <button onClick={goToMain} style={{ backgroundColor: '#0095f6' }}>
              <span>로그인</span>
            </button>
          ) : (
            <button onClick={goToMain}>
              <span>로그인</span>
            </button>
          )}
        </div>
      </div>

      <div className="login-box-forgot">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}

export default LoginSungjae;
