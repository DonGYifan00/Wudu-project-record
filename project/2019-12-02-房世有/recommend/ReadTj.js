import React, { Component } from 'react'
import Header from './Recommend.js'
import {HashRouter as Router,Route} from 'react-router-dom';
import Shige from './Container/Shige.js'
import Xiaoshuo from './Container/Xiaoshuo.js'
import Sanwen from './Container/Sanwen.js'
import Zhuanji from './Container/Zhuanji.js'
import Zhexue from './Container/Zhexue.js'
import Renwen from './Container/Renwen.js'
import Lvxing from './Container/Lvxing.js'
import Xiqu from './Container/Xiqu.js'
import {Redirect} from 'react-router-dom'
import Tuijian from './Container/Tuijian.js';

export default class ReadTj extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <Redirect from="/" to="/tuijian"/>
                    <Redirect from="/tuijian" to="/tuijian"/>
                    <Route path="/tuijian" component={Tuijian}/>
                    <Route path="/shige" component={Shige}/>
                    <Route path="/xiaoshuo" component={Xiaoshuo}/>
                    <Route path="/sanwen" component={Sanwen}/>
                    <Route path="/zhuanji" component={Zhuanji}/>
                    <Route path="/zhexue" component={Zhexue}/>
                    <Route path="/renwen" component={Renwen}/>
                    <Route path="/lvxing" component={Lvxing}/>
                    <Route path="/xiqu" component={Xiqu}/>
                </div>
            </Router>
        )
    }
}
