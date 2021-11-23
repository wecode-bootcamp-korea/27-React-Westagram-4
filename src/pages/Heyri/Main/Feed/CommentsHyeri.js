// import { useState } from 'react';
import './CommentsHyeri.scss';
// import { ReactComponent as Heart } from '../../../../assets/images/heart.svg';
// import { ReactComponent as ActiveHeart } from '../../../../assets/images/active_heart.svg';
// import { useState } from 'react';

function CommentsHyeri(props) {
  // console.log(props);

  return (
    <>
      {props.comments.map(data => {
        // console.log('data', data);

        return (
          <div className="newComments" key={data.id}>
            <ul className="commentsInput">
              <li className="userName">{data.userName}</li>
              <li className="userTalk">{data.content}</li>
              <li className="newComment">{data.comments}</li>
            </ul>
            <div className="icon"></div>
          </div>
        );
      })}
    </>
  );
}

export default CommentsHyeri;
