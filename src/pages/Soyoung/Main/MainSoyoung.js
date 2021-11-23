import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Nav from '../../../components/Nav/Nav';
import AsideSoyoung from './Aside/AsideSoyoung';
import FeedSoyoung from './Feed/FeedSoyoung';
import './MainSoyoung.scss';

function MainSoyoung({ comment }) {
  const [commentsListDatas, setCommentsListDatas] = useState([]);

  useEffect(() => {
    comment.getCommentData().then(data => {
      setCommentsListDatas(data);
    });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="mainContainer">
          <section className="feeds">
            {commentsListDatas.map(commentsListData => {
              return (
                <FeedSoyoung
                  key={commentsListData.id}
                  commentsListData={commentsListData.value}
                />
              );
            })}
          </section>
          <AsideSoyoung />
        </div>
      </main>
    </>
  );
}

export default MainSoyoung;
