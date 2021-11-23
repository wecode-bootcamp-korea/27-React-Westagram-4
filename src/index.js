import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import Comment from './service/comment';

import './styles/reset.scss';
import './styles/common.scss';
import '@fortawesome/fontawesome-free/js/all.js';

const comment = new Comment();

ReactDOM.render(<Router comment={comment} />, document.getElementById('root'));
