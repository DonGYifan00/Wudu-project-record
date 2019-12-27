import React, { Component } from 'react'
import './wuyong.css'
export default class Guanyuwomen extends Component {
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
                    <p className='wuyongp1'>关于我们</p>
                </div>
                <div className='wuyongdiv5'>
                    <p className="wuyongp3">我们</p>
                    <p className='wuyongp6'>项目团队：河北师大软件学院H5方向A班误读团队</p>
                    <p className='wuyongp6'>项目成员：董一凡(组长) 薛腾飞 薛明星 房世有 李继业</p>
                    <p className='wuyongp6'>项目愿景：为读书爱好者提供阅读交流平台</p>
                    <p className='wuyongp6'>项目周期：共四周，以每周为单位进行项目更新</p>
                    <p className='wuyongp6'>项目前端：薛明星 房世有 李继业</p>
                    <p className='wuyongp6'>项目后端：董一凡 薛腾飞</p>
                    <p className='wuyongp6'>前端主要工作：页面开发 页面整合与跳转 提供系统接口</p>
                    <p className='wuyongp6'>后端主要工作：数据库搭建 前后端与数据库的连接写入</p>
                    <p className='wuyongp6'>理论成果：前端页面呈现完整，二三级页面跳转无误，各个系统
                    接口可以正常使用，页面内容呈现正确。前后端与数据库的连接正确，可以实现对数据库内容
                    的写入和读取。后端页面呈现正确，功能实现正确，和前端数据库的连接正确。总而言之，就是
                    可以让用户能够进行简单的使用。</p>
                </div>
            </div>
        )
    }
}
