import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/zhuce.css'
export default class login extends Component {
    constructor(){
        super();
    }
    onClick=()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
                <div className='zhucediv1'>
                    <img src={require("../images/3.png")} className='zhuceimg1' onClick={this.onClick}></img>
                    <p className='zhucep1'>设置资料</p>
                </div>
                <div className='zhucediv2'>
                    <p className='zhucep2'>昵&ensp;称</p>
                </div>
                <div className='zhucediv2'>
                    <p className='zhucep2'>个&ensp;性&ensp;宣&ensp;言</p>
                </div>
                <div className='zhucediv2'>
                    <p className='zhucep2'>登&ensp;录&ensp;名</p>
                </div>
                <div className='zhucediv2'>
                    <p className='zhucep2'>密&ensp;码</p>
                </div>
                <div className='zhucediv2'>
                    <p className='zhucep2'>确&ensp;认&ensp;密&ensp;码</p>
                </div>
                <div className='zhucediv3'>
                    <p>(密码由6-16位 数字、字母或者符号组成)</p>
                </div>
                <div className='zhucediv2'>
                    <p className='zhucep2'>手&ensp;机&ensp;号</p>
                </div>
                <div className='zhucediv4'>
                    <p className='zhucep2'>验&ensp;证&ensp;码</p>
                </div>
                <div className='zhucediv5'>
                    <p className='zhucep2'>获取验证码</p>
                </div>
                <Link to='gobackshouye'>
                    <div className='zhucediv6'>
                        <p className='zhucep3'>注&ensp;&ensp;册</p>
                    </div>
                </Link>
            </div>
        )
    }
}
