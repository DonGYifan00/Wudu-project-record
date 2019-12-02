import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Login from './Login/Login.js'
import Recommend from './recommend/Recommend.js'
// import Csxq from './chongshu/Csxq.js'
import ReadTj from './recommend/ReadTj.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));


serviceWorker.unregister();
