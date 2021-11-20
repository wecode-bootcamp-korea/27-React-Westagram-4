import React from 'react';
import { Link } from 'react-router-dom';
import './commentSoyoung.scss';

const CommentSoyoung = ({ comment, onToggleHeart }) => {
  const handleToggleHeart = () => {
    onToggleHeart(comment);
  };

  return (
    <li className="comment">
      <div className="content">
        <Link to="feed/author" className="authorId" href="">
          {comment.userId}
        </Link>
        <span className="message">{comment.text}</span>
      </div>
      <button className="heartBtn" onClick={handleToggleHeart}>
        <img
          className="icon"
          src={`images/Soyoung/Main/${comment.isActiveHeart}`}
        />
      </button>
    </li>
  );
};

export default CommentSoyoung;
