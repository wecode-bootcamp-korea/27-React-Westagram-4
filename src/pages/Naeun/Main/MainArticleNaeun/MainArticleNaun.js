import React, { useState } from 'react';
import './MainArticleNaeun.scss';

function MainArticleNaeun() {
  const [userInput, setUserInput] = useState('');
  const [comments, setComments] = useState([]);

  function onChange(event) {
    setUserInput(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setComments(currentArray => [userInput, ...currentArray]);
    setUserInput('');
  }

  function onRemove(event) {
    setUserInput(comments.filter(elements => elements === elements));
  }

  return (
    <>
      <main className="MainArticleNaeun">
        <div className="main-right-box">
          <div className="main-right-box-top">
            <div className="main-right-box-id">
              <img src="/images/Naeun/Main/naeun.jpg" />
              <span>naniboo_o</span>
            </div>
            <div className="main-right-box-top-imo">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="main-right-image">
            <img src="/images/Naeun/Main/cotton.png" />
          </div>
          <div className="main-right-box-comment-bar">
            <div className="main-right-box-comment-bar-left">
              <span className="blank-heart">
                <i className="far fa-heart blank-heart-icon"></i>
              </span>
              <i className="far fa-comment"></i>
              <i className="fas fa-location-arrow"></i>
            </div>
            <div className="main-right-box-comment-bar-center">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="main-right-box-comment-bar-right">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="main-right-box-like-bar">
            <img src="/images/Naeun/Main/animal.jpg" />
            <span className="bold">yojuyoon</span>님
            <span className="bold">외 46명</span>
            <span>이 좋아합니다</span>
          </div>
          <div className="main-right-box-posting-bar">
            <span className="my-id">naniboo_o</span>
            <span className="letter">목화와 목화와 목화😎</span>
            <div className="time">
              <span>17시간 전</span>
            </div>
            <ul className="message-list">
              {comments.map((elements, index) => {
                return (
                  <>
                    <li className="message-list-box">
                      <div>
                        <span className="message-list-id">naniboo_o</span>
                        <span className="message-list-content">{elements}</span>
                      </div>
                      <button
                        onClick={onRemove}
                        className="message-list-delete-button"
                      >
                        X
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <form onSubmit={onSubmit} className="comment-input-bar">
            <div className="smile-message">
              <i className="far fa-smile"></i>
              <input
                onChange={onChange}
                value={userInput}
                className="message-input"
                type="text"
                placeholder="댓글 달기..."
              />
            </div>
            <div className="posting">
              <button type="submit">게시</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default MainArticleNaeun;
