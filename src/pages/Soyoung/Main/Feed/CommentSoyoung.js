import React from 'react';
import { Link } from 'react-router-dom';
import './commentSoyoung.scss';

const CommentSoyoung = ({ comment }) => {
  return (
    <li className="comment">
      <div className="content">
        <Link to="feed/author" className="authorId" href="">
          {comment.userId}
        </Link>
        <span className="message">{comment.text}</span>
      </div>
      <button className="heartBtn">
        <i alt="하트 버튼" class="far fa-heart btnIcon" />
      </button>
    </li>
  );
};

export default CommentSoyoung;
