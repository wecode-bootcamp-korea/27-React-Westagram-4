import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHyeri.scss';

function LoginHyeri() {
  const navigate = useNavigate();

  const goToMain = () => {
    if (idValue.includes('@') && pwValue.length >= 5) {
      navigate('/main-hyeri');
    } else {
      alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
    }
  };

  // 버튼 구현
  let [active, setActive] = useState(false);

  let [idValue, setIdInput] = useState('');
  let [pwValue, setPwInput] = useState('');
  console.log(idValue);
  console.log(pwValue);

  const ActiveIsPassedLogin = () => {
    return idValue.includes('@') && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const handleId = e => {
    setIdInput(e.target.value);
  };
  const handlePw = e => {
    setPwInput(e.target.value);
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
              onKeyUp={ActiveIsPassedLogin}
              onChange={handleId}
            />
          </div>
          <div className="passForm">
            <input
              type="password"
              id="pw"
              name="pw"
              placeholder="비밀번호"
              onKeyUp={ActiveIsPassedLogin}
              onChange={handlePw}
            />
          </div>
          <button
            type="button"
            onClick={goToMain}
            name=""
            className={active ? 'activeLoginBtn' : 'loginBtn'}
            disabled={idValue === '' || pwValue === '' ? true : false}
          >
            로그인
          </button>
          <div className="bottomText">비밀번호를 잊으셨나요?</div>
        </form>
      </section>
    </>
  );
}

export default LoginHyeri;
