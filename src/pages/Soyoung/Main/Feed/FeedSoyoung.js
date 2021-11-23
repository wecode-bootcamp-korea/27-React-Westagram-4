import React, { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import CommentList from './CommentListSoyoung/CommentList';
import { ReactComponent as HeartImg } from '../../../../assets/images/heart.svg';
import './FeedSoyoung.scss';

console.log(<heartImg />);

const FeedSoyoung = ({ commentsListData }) => {
  const [userName, setuserName] = useState('weweco');
  const [commentsList, setCommentsList] = useState([...commentsListData]);
  const [abel, setAbel] = useState('disable');
  const inputRef = useRef();

  const handleResetForm = useCallback(() => {
    inputRef.current.value = '';
  }, []);

  const handleAddComment = (userName, commentText) => {
    setCommentsList([
      ...commentsList,
      {
        id: Date.now(),
        userName,
        content: commentText,
        isLiked: false,
      },
    ]);
    handleResetForm();
  };

  const handleCreateCommentText = e => {
    const commentText = inputRef.current.value;
    commentText && handleAddComment(userName, commentText);
  };

  const handleDisabledButton = useCallback(() => {
    const isInputValid = inputRef.current.value.length > 0 ? true : false;
    isInputValid ? setAbel(null) : setAbel('disable');
  }, []);

  const handleToggleHeart = useCallback(comment => {
    setCommentsList(commentsList =>
      commentsList.map(item => {
        if (item.id === comment.id) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
          };
        }
        return item;
      })
    );
  }, []);

  const handleDeleteComment = useCallback(comment => {
    setCommentsList(commentsList =>
      commentsList.filter(item => item.id !== comment.id)
    );
  }, []);

  const onKeyPress = e => {
    if (e.code === 'Enter') handleCreateCommentText();
  };

  return (
    <article className="feed">
      <div className="header">
        <div className="author userInfoSmall">
          <Link to="/user/" className="profileLink avartar">
            <img alt="프로필로 이동" src="images/Soyoung/Main/profile01.png" />
          </Link>
          <div className="desc info">
            <Link to="feed/user" className="id">
              cafeWeCoffee
            </Link>
            <Link to="feed/locator" className="locator desc">
              카페 위커피 선릉점 - Cafe WeCoffee
            </Link>
          </div>
        </div>
        <button className="moreBtn">
          <i alt="더보기 버튼" class="fas fa-ellipsis-h" />
        </button>
      </div>
      <div className="imagesWrap">
        <img
          alt="따사로운 오후 풍경"
          className="images"
          src="images/Soyoung/Main/feed01.jpg"
        />
      </div>
      <div className="body">
        <div className="actionBtns">
          <div className="left">
            <button type="button" className="actionBtn">
              <HeartImg alt="하트 토글버튼" class="btnIcon" />
            </button>
            <Link to="feed/post" className="actionBtn">
              <i alt="코멘트 이동버튼" class="far fa-comment btnIcon" />
            </Link>
            <Link to="feed/message" className="actionBtn">
              <i alt="메세지페이지 이동버튼" class="far fa-envelope btnIcon" />
            </Link>
          </div>
          <button className="actionBtn">
            <i alt="즐겨찾기 버튼" class="far fa-bookmark btnIcon" />
          </button>
        </div>
        <span className="likeCount">좋아요 452개</span>
        <p className="authorComment">
          <Link to="feed/author-profile" className="id">
            cafeWeCoffee
          </Link>
          따스한 오후 커피타임 이벤트... &nbsp;
          <button className="moreBtn">더 보기</button>
        </p>
        <CommentList
          commentsList={commentsList}
          onToggleHeart={handleToggleHeart}
          onDeleteComment={handleDeleteComment}
        />
        <span className="feedTime">12시간 전</span>
      </div>
      <form
        className="commentInput"
        onKeyPress={onKeyPress}
        onInput={handleDisabledButton}
      >
        <textarea className="input" placeholder="댓글 달기..." ref={inputRef} />
        <button
          type="button"
          className="postBtn"
          onClick={handleCreateCommentText}
          disabled={abel}
        >
          게시
        </button>
      </form>
    </article>
  );
};

export default FeedSoyoung;
