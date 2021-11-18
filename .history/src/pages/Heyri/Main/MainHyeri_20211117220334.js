import React from 'react';
import Nav from '../../components/Nav/Nav';
import Right from '../Main/Right/Right';
import Feed from '../Main/Feed/Feed';

function Main() {
  return (
    <main className="main">
      <Nav />
      <main className="mainTitle">
        <Right />
      </main>
    </main>
  );
}

export default Main;
