import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import '../Index/My.css'
import Myzhuye from '../My/Myzhuye'
import Zhuce from '../My/Zhuce'
export default class My extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <div>
                <div className='div1'>
                    <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img1'></img>
                    <p className='p1'>我是天才</p>
                    <p className='p2'>?书币&ensp;?书券</p>
                    <p className='p2'>VIP?&ensp;&ensp;&ensp;&ensp;LV?</p>
                </div>
                <div className='div2'>
                    <div className='div3'>
                        <img src='http://hbimg.b0.upaiyun.com/7792e8af1b4b55d89eca95032ed7dc6301e2eca7bf91-oDFFDj_fw236' className='img2'></img>
                        <button className='button1'>主页</button>
                    </div>
                    <div>
                    </div>
                    <div className='div4'>
                        <img src='http://hbimg.b0.upaiyun.com/7792e8af1b4b55d89eca95032ed7dc6301e2eca7bf91-oDFFDj_fw236' className='img2'></img>
                        <button className='button1'>账户</button>
                    </div>
                </div>
                <div className='div5'>
                    <ul className='ul1'>
                        <li>
                            <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img3'></img>
                            <button>浏览历史</button>
                        </li>
                        <li>
                            <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img3'></img>
                            <button>我的收藏</button>
                        </li>
                        <li>
                            <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img3'></img>
                            <button>我的兴趣方向</button>
                        </li>
                        <li>
                            <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img3'></img>
                            <button>我的消息</button>
                        </li>
                        <li>
                            <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img3'></img>
                            <button>设置</button>
                        </li>
                        <li>
                            <img src='http://image14.m1905.cn/uploadfile/2016/0812/20160812100021514.jpg' className='img3'></img>
                            <button>关于我们</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
