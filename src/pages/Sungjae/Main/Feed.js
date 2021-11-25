import React, { useState } from 'react';
import NewCommentSungjae from './NewCommentSungjae';
import '../../../styles/reset.scss';
import './MainSungjae.scss';

function Feed(props) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  return (
    <>
      <div className="feed">
        <article className="feed-article">
          <div className="user">
            <div className="profile">
              <img src={props.order.userImg} />
              <h3>{props.order.userName}</h3>
            </div>
            <div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>

          <img src={props.order.feedImg} />

          <div className="feed-article-icons">
            <div className="left">
              <i className="far fa-heart fa-lg icon" />
              <i className="far fa-comment fa-lg icon" />
              <i className="far fa-paper-plane fa-lg icon" />
            </div>
            <div className="right">
              <i className="far fa-bookmark fa-lg" />
            </div>
          </div>

          <div className="feed-article-like">
            <div>
              <img src="images/Sungjae/Main/wecode.jpeg" />
            </div>
            <h3 className="bold-font">wecode-bootcamp</h3>
            <h3>님</h3>
            <h3 className="bold-font">외 10명</h3>
            <h3>이 좋아합니다</h3>
          </div>

          <div className="feed-article-posting">
            <div className="username">{props.order.userName}</div>
            <div>{props.order.feedContent}</div>
            <div className="more">더 보기</div>
          </div>

          <NewCommentSungjae
            comments={comments}
            comment={comment}
            order={props.order}
          />

          <div className="feed-article-time">42분전</div>

          <div className="feed-comment-add">
            <input
              value={comment}
              type="text"
              placeholder="댓글 달기..."
              onChange={event => {
                setComment(event.target.value);
              }}
              onKeyDown={event => {
                if (window.event.keyCode == 13) {
                  setComments([...comments, comment]);
                  setComment('');
                }
              }}
            />
            <button
              onClick={() => {
                setComments([...comments, comment]);
                setComment('');
              }}
            >
              게시
            </button>
          </div>
        </article>
      </div>
    </>
  );
}

export default Feed;
