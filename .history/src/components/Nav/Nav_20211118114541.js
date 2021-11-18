import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
  return (
    <header>
      <div className="NavContainer">
        <nav>
          <h1 id="westagramLogo">westagram</h1>
          <form action="/user/user_search" className="search">
            <i class="fas fa-search" />
            <input
              type="text"
              id="searchKeyWord"
              className="input"
              placeholder="검색"
            />
            <button type="submit" id="searchClear" className="clearBtn">
              <i class="fas fa-times-circle" />
            </button>
          </form>
          <ul className="menus">
            <li className="menu">
              <Link to="/main-soyoung">
                <i alt="홈 이동버튼" class="fas fa-home navBtn" />
              </Link>
            </li>
            <li className="menu">
              <Link to="/message-soyoung">
                <i alt="메세지페이지 이동버튼" class="far fa-envelope navBtn" />
              </Link>
            </li>
            <li className="menu">
              <Link to="/add-story-soyoung">
                <i
                  alt="스토리추가페이지 이동버튼"
                  class="far fa-plus-square navBtn"
                />
              </Link>
            </li>
            <li className="menu">
              <Link to="/add-story-soyoung">
                <i alt="탐색페이지 이동버튼" class="far fa-compass navBtn" />
              </Link>
            </li>
            <li className="menu">
              <button type="button" id="heartAlertBtn">
                <i alt="하트알람확인 버튼" class="far fa-heart navBtn" />
              </button>
            </li>
            <li className="menu">
              <button type="button" id="userSettingBtn">
                <i alt="계정설정 버튼" class="fas fa-user-circle navBtn" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
