import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 혜리's 컴포넌트
import LoginHyeri from './pages/Heyri/Login/LoginHyeri';
import MainHyeri from './pages/Heyri/Main/MainHyeri';

// 소영's 컴포넌트
import LoginSoyoung from './pages/Soyoung/Login/LoginSoyoung';
import MainSoyoung from './pages/Soyoung/Main/MainSoyoung';

// 나은's 컴포넌트
import LoginNaeun from './pages/Naeun/Login/LoginNaeun';
import MainNaeun from './pages/Naeun/Main/MainNaeun';

// 성재's 컴포넌트
import LoginSungjae from './pages/Sungjae/Login/LoginSungjae';
import MainSungjae from './pages/Sungjae/Main/MainSungjae';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hyeri" element={<LoginHyeri />} />
        <Route path="/main-hyeri" element={<MainHyeri />} />

        <Route path="/login-soyoung" element={<LoginSoyoung />} />
        <Route path="/main-soyoung" element={<MainSoyoung />} />

        <Route path="/login-naeun" element={<LoginNaeun />} />
        <Route path="/main-naeun" element={<MainNaeun />} />

        <Route path="/login-sungjae" element={<LoginSungjae />} />
        <Route path="/main-sungjae" element={<MainSungjae />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
