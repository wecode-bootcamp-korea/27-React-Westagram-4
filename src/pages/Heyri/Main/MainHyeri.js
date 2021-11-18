import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from '../Main/Aside/AsideHyeri';
import '../Main/MainHyeri.scss';
import Feed from '../Main/Feed/Feed';

function MainHyeri() {
  return (
    <main className="main">
      <Nav />
      <main className="mainTitle">
        <Feed />
        <Aside />
      </main>
    </main>
  );
}

export default MainHyeri;
