import React, { Component } from 'react'
import './wuyong.css'
export default class Guanyuwudu extends Component {
    constructor(props){
        super(props);
    }
    onclick=()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
                <div  className='wuyongdiv1'>
                    <img src={require("../images/3.png")} className='wuyongimg1'onClick={this.onclick}/>
                    <p className='wuyongp1'>检查更新</p>
                </div>
                <div className='wuyongdiv3'>
                    <p className='wuyongp2'>已是最新版本</p>
                    <p className='wuyongp5'>版本号：1.1.1.0</p>
                </div>
            </div>
        )
    }
}
