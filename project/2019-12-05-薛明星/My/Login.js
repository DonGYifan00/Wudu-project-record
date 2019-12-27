import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/denglv.css'
export default class login extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <div className="loginTb">
                <img src={require('../images/shu.png')} alt=""/>
                </div>
                <div className="loginBody">
                    <div className="loginInput">
                        用户名 <input type="text" name="username"/>
                    </div>
                    <div  className="loginInput">
                        密  码 <input style={{marginLeft:"20px"}} type="pwd" name="pwd"/>
                    </div>
                    <div className="loginFs">
                        <img src={require('../images/qq.png')} alt=""/>
                        <img src={require('../images/weixin.png')} alt=""/>
                        <img src={require('../images/weibo.png')} alt=""/>
                    </div>
                    <div className="loginBut">
                        <button><Link to="/goshouye">登录</Link></button>
                        <Link to='/zhuce'><div style={{float:"left"}}>立即注册!</div></Link>
                        <div style={{float:"right"}}>忘记密码?</div>
                    </div>
                </div>
            </div>
        )
    }
}
