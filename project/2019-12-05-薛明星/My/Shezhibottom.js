import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/shezhibottom.css'
export default class shezhibottom extends Component {
    constructor(props){
        super(props);
    }
    onClick=()=>{
        this.props.history.push("/shouye/my")
        console.log(this.props.match.url);
    }
    render() {
        return (
            <div>
                <div className='shezhibottomdiv1'>
                    <img src={require("../images/10.png")} className='shezhibottomimg1'
                    onClick={this.onClick}></img>
                    <p className='shezhibottomp1'>设置</p>
                </div>
                <Link to={{pathname:'/shouye/my/shezhibottom/zhanghaoanquan'} } style={{color:'black'}}>
                <div className='shezhibottomdiv2'>
                   <p className='shezhibottomp2'>账号与安全</p>
                   <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                </Link>
                <Link to={{pathname:'/shouye/my/shezhibottom/Xinxiaoxi'} } style={{color:'black'}}>
                <div className='shezhibottomdiv3'>
                <p className='shezhibottomp2'>新消息提醒</p>
                   <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                </Link>
                <hr/>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>通用</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                <hr/>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>字体大小</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                <hr/>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>省流量模式</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                <hr/>
                <Link to={{pathname:'/shouye/my/shezhibottom/Guanyuwudu'} } style={{color:'black'}}>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>关于误读</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                </Link>
                <hr/>
                <Link to={{pathname:'/shouye/my/shezhibottom/Guanyuwomen'} } style={{color:'black'}}>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>关于我们</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                </Link>
                <hr/>
                <div className='shezhibottomdiv3'>
                    <p className='shezhibottomp2'>黑名单</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                <hr/>
                <Link to={{pathname:'/shouye/my/shezhibottom/Jianchagengxin'} } style={{color:'black'}}>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>检查更新</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                </Link>
                <hr/>
                <div className='shezhibottomdiv4'>
                    <p className='shezhibottomp2'>误读插件</p>
                    <img src={require("../images/11.png")} className='shezhibottomimg2'></img>
                </div>
                <hr/>
                <div className='shezhibottomdiv5'>
                    <p className='shezhibottomp3'>切&ensp;换&ensp;账&ensp;号</p>
                </div>
                <hr/>
            </div>
        )
    }
}
