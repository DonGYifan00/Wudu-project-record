import React, { Component } from 'react'
import './wuyong.css'
export default class Xinxiaoxi extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     zhanghu:[]
        // }
    }
    onclick=()=>{
        this.props.history.go(-1);
    }
    // componentDidMount(){
    //     fetch("http://localhost:9000/zhanghu",{
    //         method:"POST",
    //         body:"",
    //         headers:{"Content-Type":"application/json"}
    //     })
    //     .then(res=>res.text())
    //     .then(res=>{
    //         var a = JSON.parse(res);
    //         this.setState({
    //             zhanghu:a
    //         })
    //     })
    // }
    render() {
        return (
            <div>
                <div  className='wuyongdiv1'>
                    <img src={require("../images/3.png")} className='wuyongimg1'onClick={this.onclick}/>
                    <p className='wuyongp1'>新消息提醒</p>
                </div>
                <div className='wuyongdiv2'>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>新消息系统通知</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>开启震动</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>通知显示消息详情</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>阅读界面中的新消息通知</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>接收新消息通知</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                </div>
            </div>
        )
    }
}
