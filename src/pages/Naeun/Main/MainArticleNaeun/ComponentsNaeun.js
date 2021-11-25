import React, { useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './MainArticleNaeun.scss';

function ComponentsNaeun(props) {
  return (
    <>
      <li className="message-list-box">
        <div>
          <span className="message-list-id">naniboo_o</span>
          <span className="message-list-content">{props.elements}</span>
        </div>
        <button className="message-list-delete-button">X</button>
      </li>
    </>
  );
}
export default ComponentsNaeun;
