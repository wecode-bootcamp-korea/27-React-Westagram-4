import React from 'react';
import { Link } from 'react-router-dom';
import CommentSoyoung from './CommentSoyoung';

function FeedSoyoung(props) {
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
            <button type="button" id="heartToggleBtn" className="actionBtn">
              <i alt="하트 토글버튼" class="far fa-heart btnIcon" />
            </button>
            <Link to="feed/post" className="actionBtn">
              <i alt="코멘트 이동버튼" class="far fa-comment btnIcon" />
            </Link>
            <Link to="feed/message" id="goToMeassageBtn" className="actionBtn">
              <i alt="메세지페이지 이동버튼" class="far fa-envelope btnIcon" />
            </Link>
          </div>
          <button id="favoritesToggleBtn" className="actionBtn">
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
        <ul className="comments" id="feedComments">
          <CommentSoyoung />
        </ul>
        <span className="feedTime">12시간 전</span>
      </div>
      <form className="commentInput">
        <textarea className="input" placeholder="댓글 달기..." />
        <button type="button" id="postBtn" disabled>
          게시
        </button>
      </form>
    </article>
  );
}

export default FeedSoyoung;
