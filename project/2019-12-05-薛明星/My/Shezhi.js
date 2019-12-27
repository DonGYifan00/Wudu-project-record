import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import '../Index/shezhi.css'
export default class Shezhi extends Component {
    constructor(props) {
        super(props);
        this.state = { name: localStorage.getItem('username') };
      }
    render(){
        return(
            <div>
                <div className="shezhidiv1"> 
                    <Link to='my'><img src={require("../images/3.png")} className='shezhiimg1'></img></Link>
                    
                    <p className='shezhip1'>我是天才</p>
                </div>
                <div className='shezhidiv2'>
                    <div className='shezhidiv3'>
                        <p className='shezhip2'>个性宣言：书，乃人生之最大乐趣</p>
                    </div>
                    <div className='shezhidiv3'>
                        <p className='shezhip2'>所在地区：中国，石家庄市，河北师范大学</p>
                    </div>
                    <div className='shezhidiv3'>
                        <p className='shezhip2'>个人爱好：健身、游泳、读书、游戏、动漫</p>
                    </div>
                    <div className='shezhidiv3'>
                        <p className='shezhip2'>阅读书籍：科技、历史、战争、玄幻、文学</p>
                    </div>
                    <div className='shezhidiv3'>
                        <p className='shezhip2'>性别：你猜呢</p>
                    </div>
                    <div className='shezhidiv3'>
                        <p className='shezhip2'>联系方式：152-3084-9672</p>
                    </div>
                </div>
                <Link to='tuichudenglv'>
                    <div className='shezhidiv4'>
                        <p className='shezhip3'>退出登录</p>
                    </div>
                </Link>
            </div>
        )
    }
}