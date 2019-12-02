import React,{Component,useState, useEffect} from 'react';
import ReactDOM,{render} from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './app';
import Tushu from './tushuxiangqing'
import './index.css';

ReactDOM.render(
        <Tushu/>,
        document.getElementById('root')
    )