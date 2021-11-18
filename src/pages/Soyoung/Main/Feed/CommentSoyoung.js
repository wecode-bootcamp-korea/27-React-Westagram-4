import React from 'react';
import { Link } from 'react-router-dom';

function CommentSoyoung(props) {
  return (
    <li className="comment">
      <div className="content">
        <Link to="feed/author" className="authorId" href="">
          weweco
        </Link>
        <span className="message">벌써 크리스마스가 다가오네요~🎄</span>
      </div>
      <button className="heartBtn">
        <i alt="하트 버튼" class="far fa-heart btnIcon" />
      </button>
    </li>
  );
}

export default CommentSoyoung;
