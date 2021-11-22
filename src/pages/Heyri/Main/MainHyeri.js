import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from '../Main/Aside/AsideHyeri';
import '../Main/MainHyeri.scss';
import FeedHyeri from './Feed/FeedHyeri';

function MainHyeri() {
  return (
    <main className="main">
      <Nav />
      <main className="mainTitle">
        <FeedHyeri />
        <Aside />
      </main>
    </main>
  );
}

export default MainHyeri;
