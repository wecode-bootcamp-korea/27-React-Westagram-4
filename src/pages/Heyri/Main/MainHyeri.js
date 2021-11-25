import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from '../Main/Aside/AsideHyeri';
import '../Main/MainHyeri.scss';
import FeedHyeri from './Feed/FeedHyeri';

function MainHyeri() {
  return (
    <>
      <Nav />
      <main className="mainTitle">
        <div className="mappingFeed">
          <FeedHyeri />
          <FeedHyeri />
        </div>
        <Aside />
      </main>
    </>
  );
}

export default MainHyeri;
