import React from 'react';
import { Link } from 'react-router-dom';
import './commentSoyoung.scss';

const CommentSoyoung = ({ comment, onToggleHeart, onDeleteComment }) => {
  const handleToggleHeart = () => {
    onToggleHeart(comment);
  };

  const handleDeleteComment = () => {
    onDeleteComment(comment);
  };

  return (
    <li className="comment">
      <div className="content">
        <Link to="feed/author" className="authorId" href="">
          {comment.userId}
        </Link>
        <span className="message">{comment.text}</span>
      </div>
      <div className="btns">
        <button className="trashBtn" onClick={handleDeleteComment}>
          <i class="fas fa-trash-alt icon" />
        </button>
        <button className="heartBtn" onClick={handleToggleHeart}>
          <img
            alt="하트 버튼"
            className="icon"
            src={`images/Soyoung/Main/${comment.isActiveHeart}`}
          />
        </button>
      </div>
    </li>
  );
};

export default CommentSoyoung;
