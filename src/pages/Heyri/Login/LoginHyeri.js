import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHyeri.scss';

function LoginHyeri() {
  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://10.58.0.47:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과:', result);
        // console.log(result.message);
        if (result) {
          navigate('/main-hyeri');
          console.log('결과:', result);
        }
      });
  };

  // 버튼 구현
  let [active, setActive] = useState(false);

  let [idValue, setIdInput] = useState('');
  let [pwValue, setPwInput] = useState('');
  console.log(idValue);
  console.log(pwValue);

  const activeLoginBtn = idValue === '' || pwValue === '';

  const inputValue = idValue.includes('@') && pwValue.length >= 5;

  const ActiveIsPassedLogin = () => {
    return setActive(inputValue);
  };

  const handleId = e => {
    const { value } = e.target;
    setIdInput(value);
  };
  const handlePw = e => {
    const { value } = e.target;
    setPwInput(value);
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
            disabled={activeLoginBtn ? true : false}
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
