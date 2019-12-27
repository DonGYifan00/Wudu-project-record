import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/shoucang.css'
export default class Shoucang extends Component {
    constructor(props){
        super(props);
    this.state = {
        data:[]
    }
}
    componentWillMount() {
         var name= localStorage.getItem('username');
        fetch('http://localhost:9000/wdshoucang',{
            method:'POST', 
            mode: "cors",
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({
              data:this.state.data,
              user:name
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
                    {
                        this.state.data.map((item,idx)=>
                            <div className='shoucangdiv4' key={idx}>
                                <p className='shoucangp4'>{item.bname}</p>
                                <p className='author'>{item.author}</p>
                                <p className='shoucangp5'>{item.sctime}</p>
                            </div>
                        )
                    }
            </div>
        )
    }
}
