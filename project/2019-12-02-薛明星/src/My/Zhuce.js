import React, { Component } from 'react'
import {List,InputItem,WhiteSpace} from 'antd-mobile'
import {createForm} from 'rc-form'
import '../Index/Zhuce.css'
export default class Zhuce extends Component {
    render() {
        return (
            <div style={{backgroundColor:'rgb(255,220,220)'}}>
                <div className='div0'>
                    <img src={require("../images/1.jpg")} className='img1'/>
                </div>
                <List renderHeader={()=>'用户名'}>
                    <InputItem
                    type='text'
                    placeholder='请输入用户名'>
                    </InputItem>
                </List>
                <List renderHeader={()=>'密码'}>
                    <InputItem
                    type='password'
                    placeholder='请输入密码'
                    ></InputItem>
                 </List>
                <List renderHeader={()=>'确认'}>
                    <InputItem
                    type='password'
                    placeholder='请重新输入密码'
                    ></InputItem>
                </List>
                <List renderHeader={()=>'手机号'}>
                    <InputItem
                    type='phone'
                    placeholder='请输入手机号'
                    ></InputItem>
                </List>
                <List renderHeader={()=>'验证码'} className='list1'>
                    <InputItem
                    type='phone'
                    placeholder='请输入验证码'
                    ></InputItem>
                </List>
                <button className='button1'>获取验证码</button>
                <button className='button2'>注册</button>
            </div>
        )
    }
}
