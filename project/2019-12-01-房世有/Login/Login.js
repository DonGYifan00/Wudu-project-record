import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <div className="loginTb">
                <img src={require('../img/shu.png')} alt=""/>
                </div>
                <div className="loginBody">
                    <div className="loginInput">
                        用户名 <input type="text" name="username"/>
                    </div>
                    <div  className="loginInput">
                        密  码 <input style={{marginLeft:"20px"}} type="pwd" name="pwd"/>
                    </div>
                    <div className="loginFs">
                        <img src={require('../img/qq.png')} alt=""/>
                        <img src={require('../img/weixin.png')} alt=""/>
                        <img src={require('../img/weibo.png')} alt=""/>
                    </div>
                    <div className="loginBut">
                        <button onClick={login}>登录</button>
                        <a href="#" style={{float:"left"}}>立即注册!</a>
                        <a href="#" style={{float:"right"}}>忘记密码?</a>
                    </div>
                </div>
            </div>
        )
    }
}
