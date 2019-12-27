import React, { Component } from 'react'
import './wuyong.css'
export default class zhanghu extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     zhanghu:[]}
        
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
                    <p className='wuyongp1'>账号与安全</p>
                </div>
                <div className='wuyongdiv2'>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>声音锁</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>应急联系人</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>登录设备管理</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>误读安全中心</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                    <div className='wuyongdiv3'>
                        <p className='wuyongp2'>手机安全中心</p>
                        <img src={require("../images/11.png")} className='wuyongimg2'/>
                    </div>
                </div>
            </div>
        )
    }
}
