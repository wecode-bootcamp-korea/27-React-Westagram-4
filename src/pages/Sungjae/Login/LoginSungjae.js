import React from 'react';
import '../../../styles/reset.scss';
import './LoginSungjae.scss';
import { useNavigate } from 'react-router-dom';

function LoginSungjae(props) {
  const Navigate = useNavigate();

  const goToMain = () => {
    Navigate('/main-sungjae');
  };
  return (
    <main className="login-box">
      <div className="login-box-title">
        <h1 className="login-box-title-logo">Westagram</h1>
      </div>

      <div className="login-box-child">
        <div className="login-box-child-id">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        </div>

        <div className="login-box-child-passsword">
          <input type="password" placeholder="비밀번호" />
        </div>

        <div className="login-box-child-btn">
          <button onClick={goToMain}>
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
