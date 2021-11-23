import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import AsideSungjae from './Aside/AsideSungjae';
import Feed from './Feed';
import '../../../styles/reset.scss';
import './MainSungjae.scss';

function MainSungjae(props) {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      {/* <!-- 네비게이션 바 --> */}
      <Nav />
      {/* <!-- 메인 페이지 --> */}
      <main className="main">
        {/* <!-- 메인 페이지 feed--> */}

        <div>
          {feedList.map(function (feed, i) {
            const order = feedList[i];

            return <Feed feedList={feedList} order={order} />;
          })}
        </div>
        {/* <!-- 위에 메인페이지 왼쪽, 아래 메인페이지 오른쪽--> */}
        <AsideSungjae />
      </main>
    </>
  );
}

export default MainSungjae;
