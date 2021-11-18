import React from 'react';
import './InputHyeri.scss';

function InputHyeri() {
  return (
    <>
      <div className="idForm">
        <input
          type="text"
          id="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
      </div>
      <div className="passForm">
        <input type="password" id="pw" placeholder="비밀번호" />
      </div>
    </>
  );
}

export default InputHyeri;
