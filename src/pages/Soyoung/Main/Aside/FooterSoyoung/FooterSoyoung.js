import React from 'react';
import { Link } from 'react-router-dom';
import { INFO_LIST } from './FooterDataSoyoung';

const FooterSoyoung = () =>
  INFO_LIST.map(info => {
    return (
      <li key={info.id} className="item">
        <Link to={info.to} target="_blank">
          {info.content}
        </Link>
      </li>
    );
  });
export default FooterSoyoung;
