import React from 'react';
import CommentSoyoung from '../CommentSoyoung/CommentSoyoung';

const CommentList = ({ commentsList, onToggleHeart, onDeleteComment }) => {
  return (
    <ul className="comments">
      {commentsList.map(comment => (
        <CommentSoyoung
          key={comment.id}
          comment={comment}
          onToggleHeart={onToggleHeart}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </ul>
  );
};

export default CommentList;
