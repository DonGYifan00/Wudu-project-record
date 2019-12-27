import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import '../Index/My.css'
export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:localStorage.getItem('username')
        }
    }
    render(){
        return(
            <div>
                <div className="mydiv1">
                   <div className='mydiv4'>
                        <Link to='/shouye/my/shezhi'><img src={require("../images/2.png")} className="myimg2"></img></Link>
                    </div>
                    <div className='mydiv2'>
                        <img src={require("../images/1.png")} className="myimg1"></img>
                        <div className='mydiv3'>
                        <p className="myp1">{this.state.name}</p>
                        </div>
                    </div>
                </div>
                <div className='mydiv5'>
                    <div className='mydiv6'>
                        <img src={require("../images/4.png")} className="myimg3"></img>
                        <p className='myp2'>我的等级</p>
                    </div>
                    <div className='mydiv6'>
                        <img src={require("../images/6.png")} className="myimg3"></img>
                        <p className='myp2'>我的书券</p>
                    </div>
                    <Link to='history'>
                    <div className='mydiv6'>
                        <img src={require("../images/5.png")} className="myimg3"></img>
                        <p className='myp2'>浏览历史</p>
                    </div>
                    </Link>
                    <Link to='shoucang'>
                    <div className='mydiv6'>
                        <img src={require("../images/7.png")} className="myimg3"></img>
                        <p className='myp2'>我的收藏</p>
                    </div>
                    </Link>
                    <div className='mydiv6'>
                        <img src={require("../images/9.png")} className="myimg3"></img>
                        <p className='myp2'>我的消息</p>
                    </div>
                    <Link to='/shouye/my/shezhibottom'>
                    <div className='mydiv6'>
                        <img src={require("../images/8.png")} className="myimg3"></img>
                        <p className='myp2'>设置</p>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}