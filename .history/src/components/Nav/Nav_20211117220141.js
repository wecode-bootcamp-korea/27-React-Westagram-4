import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <nav className="navContainer">
        <div className="navBar">
          <div className="logo">
            <Link to="/">
              <h1>westagram</h1>
            </Link>
          </div>
          <div className="searchForm">
            <input
              className="searchBarInput"
              type="search"
              placeholder="검색"
            />
          </div>
          <div className="contentIcons">
            <ul>
              <li className="icon-Home">
                <a href="#">
                  <img src="/images/icon_home.png" />
                </a>
              </li>
              <li className="icon-Direct">
                <a href="#">
                  <svg width="22" height="22" viewBox="0 0 48 48">
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </a>
              </li>
              <li className="icon-Nav">
                <a href="#">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                </a>
              </li>
              <li className="icon-Heart">
                <a href="#">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                </a>
              </li>
              <li className="icon-Profile">
                <a href="#">
                  <div className="profileBox">
                    <img src="/images/icon-profile.jpg" alt="solmii_dev" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
