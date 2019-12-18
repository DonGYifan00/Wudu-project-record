import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/shoucang.css'
export default class Shoucang extends Component {
    constructor(props){
        super(props);
    this.state = {
        data:[],
        bname:'',
        sctime:'',
        tuurl: ''
    }
}
    componentWillMount() {
        fetch('http://localhost:9000/wdshoucang',{
            method:'POST', 
            mode: "cors",
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({
                data:this.state.data
            })})
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                data:res
                }) 
            } 
            )
            
    }
    render() {
        return (
            <div>
                <div className='shoucangdiv1'>
                    <Link to='my'><img src={require("../images/10.png")} className='shoucangimg1'></img></Link>
                    <p className='shoucangp1'>我的收藏</p>
                </div>
                <div className='shoucangdiv3'>
                    <p className='shoucangp2'>全部收藏</p>
                    <img src={require("../images/13.png")} className='shoucangimg2'></img>
                    <p className='shoucangp3'>新建</p>
                </div>
                <div className='shoucangdiv2'>
                    <ul className='shoucangul1'>
                        <li>图片</li>
                        <li>视频</li>
                        <li>链接</li>
                        <li>文件</li>
                        <li>音乐</li>
                    </ul>
                    <ul className='shoucangul1'>
                        <li>位置</li>
                        <li>笔记</li>
                        <li>故事</li>
                        <li>书籍</li>
                        <li>回复</li>
                    </ul>
                </div>
                <div className='shoucangdiv4'>
                    <p className='shoucangp4'>用户名一</p>
                    <img src={require("../images/1.png")} className='shoucangimg4'></img>
                    <img src={require("../images/2.jpg")} className='shoucangimg3'></img>
                    <p className='shoucangp5'>2020-1-1</p>
                </div>
                <hr/>
                <div className='shoucangdiv4'>
                    <p className='shoucangp4'>用户名二</p>
                    <img src={require("../images/1.png")} className='shoucangimg4'></img>
                    <img src={require("../images/3.jpg")} className='shoucangimg3'></img>
                    <p className='shoucangp5'>2020-1-1</p>
                </div>
                <hr/>
                <div className='shoucangdiv4'>
                    <p className='shoucangp4'>用户名三</p>
                    <img src={require("../images/1.png")} className='shoucangimg4'></img>
                    <img src={require("../images/4.jpg")} className='shoucangimg3'></img>
                    <p className='shoucangp5'>2020-1-1</p>
                </div>
                <hr/>
                <div className='shoucangdiv4'>
                    <p className='shoucangp4'>用户名四</p>
                    <img src={require("../images/1.png")} className='shoucangimg4'></img>
                    <img src={require("../images/5.jpg")} className='shoucangimg3'></img>
                    <p className='shoucangp5'>2020-1-1</p>
                </div>
                <hr/>
                <div className='shoucangdiv4'>
                    <p className='shoucangp4'>用户名五</p>
                    <img src={require("../images/1.png")} className='shoucangimg4'></img>
                    <img src={require("../images/6.jpg")} className='shoucangimg3'></img>
                    <p className='shoucangp5'>2020-1-1</p>
                </div>
                <hr/>
            </div>
        )
    }
}
