import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartImgActive } from '../../../../../assets/images/active_heart.svg';
import { ReactComponent as HeartImg } from '../../../../../assets/images/heart.svg';
import './commentSoyoung.scss';

const CommentSoyoung = ({
  comment,
  comment: { userName, content, isLiked },
  onToggleHeart,
  onDeleteComment,
}) => {
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
          {userName}
        </Link>
        <span className="message">{content}</span>
      </div>
      <div className="btns">
        <button className="trashBtn" onClick={handleDeleteComment}>
          <i class="fas fa-trash-alt icon" />
        </button>
        <button className="heartBtn" onClick={handleToggleHeart}>
          {isLiked ? (
            <HeartImgActive alt="하트 버튼" className="icon" />
          ) : (
            <HeartImg alt="하트 버튼" className="icon" />
          )}
        </button>
      </div>
    </li>
  );
};

export default CommentSoyoung;
