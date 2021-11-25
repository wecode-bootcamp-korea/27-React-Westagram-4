import { useEffect, useState } from 'react';

function NewCommentSungjae(props) {
  // console.log(props.order.comment, '찐');
  return (
    <>
      {props.order.comment.map(function (comments, i) {
        // console.log(comments.isLiked[i]);
        return (
          <>
            <div className="newcomment" key={i}>
              <div className="leftbox">
                <div className="leftbox-username">{comments.userName}</div>
                <div className="leftbox-article">{comments.content}</div>
              </div>
              <div
                className="icon"
                onClick={() => {
                  // comments.isLiked = false;
                }}
              >
                <img
                  src={
                    comments.isLiked
                      ? 'images/sungjae/main/active_heart.svg'
                      : 'images/sungjae/main/heart.svg'
                  }
                />
              </div>
            </div>
          </>
        );
      })}

      {props.comments.map(function (data, i) {
        return (
          <div className="newcomment" key={i}>
            <div className="leftbox">
              <div className="leftbox-username">Yumdda</div>
              <div className="leftbox-article">{data}</div>
            </div>
            <div className="icon">
              <img src="images/sungjae/main/heart.svg" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewCommentSungjae;
