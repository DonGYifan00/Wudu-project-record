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
                    <p className='wuyongp1'>关于误读</p>
                </div>
                <div className='wuyongdiv4'>
                    <p className="wuyongp3">误读</p>
                    <p className='wuyongp4'>&ensp;&ensp;误读，专为阅读爱好者
                    开发的APP。在APP中，我们会提供众多的书籍资料供大家选择，也
                    会有专门的区域供大家记录下自己的读后感以便和他人分享。而且，
                    我们为广大读者提供链接到京东、当当等购买图书的渠道，方便大家
                    使用。误读APP好处多多，欢迎大家使用。</p>
                </div>
            </div>
        )
    }
}
