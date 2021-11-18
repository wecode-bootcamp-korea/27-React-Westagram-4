import React from 'react';
import Nav from '../../../components/Nav/Nav';
import AsideSoyoung from './Aside/AsideSoyoung';
import FeedSoyoung from './Feed/FeedSoyoung';
import './MainSoyoung.scss';
function MainSoyoung(props) {
  return (
    <>
      <Nav />
      <main>
        <div className="mainContainer">
          <section className="feeds">
            <FeedSoyoung />
          </section>
          <AsideSoyoung />
        </div>
      </main>
    </>
  );
}

export default MainSoyoung;
