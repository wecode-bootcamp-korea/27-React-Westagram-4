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
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  console.log(id);
  const [isCommentButtonActive, setIsCommentButtonActive] = useState('');

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  return (
    <main className="login-box">
      <div className="login-box-title">
        <h1 className="login-box-title-logo">Westagram</h1>
      </div>

      <div className="login-box-child">
        <div className="login-box-child-id">
          <input
            value={id}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={() => {
              id.includes('@') && pw.length >= 5
                ? setIsCommentButtonActive(true)
                : setIsCommentButtonActive(false);
            }}
          />
        </div>

        <div className="login-box-child-passsword">
          <input
            value={pw}
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={() => {
              {
                id.includes('@') && pw.length >= 5
                  ? setIsCommentButtonActive(true)
                  : setIsCommentButtonActive(false);
              }
            }}
          />
        </div>

        <div className="login-box-child-btn">
          <button
            onClick={goToMain}
            // onClick={() =>
            //   fetch('http://10.58.4.241:8000/users/signin', {
            //     method: 'post',
            //     body: JSON.stringify({
            //       email: id,
            //       password: pw,
            //     }),
            //   })
            //     .then(response => response.json())
            //     .then(result => console.log('결과: ', result))
            // }
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
