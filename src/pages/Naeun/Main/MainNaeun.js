import React from 'react';
import Nav from '../../../components/Nav/Nav';
import AsideNaeun from './AsideNaeun/AsideNaeun';
import MainArticleNaeun from './MainArticleNaeun/MainArticleNaun';

function MainNaeun() {
  return (
    <>
      <Nav />
      <MainArticleNaeun />
      <AsideNaeun />
    </>
  );
}

export default MainNaeun;
