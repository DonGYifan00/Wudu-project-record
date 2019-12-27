import React, { Component } from 'react'
import '../Index/Header.css'
import '../Index/tuijian.css'

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Header extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        arr: [],
            name: localStorage.getItem('username'),
            content: '',
            time: '',
            datas:''
      }
      change = (e) => {
        this.setState({
            datas: e.target.value
        })
        }
      deletepl=(e)=>{
        fetch('http://localhost:9000/shanchupl', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            id : e
        })
        })
        .then(res => res.text())
        .then(res => {
            // window.location.reload();
        }
        );
        fetch('http://localhost:9000/shouye', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            name:this.state.name,
            arr: this.state.arr
        })
    })
        .then(res => res.json())
        .then(res => {
            this.setState({
                arr: res.reverse()
            })
        }
        )
    }    
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2', '3'],
          });
        }, 100);
        fetch('http://localhost:9000/shouye', {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                name:this.state.name,
                arr: this.state.arr
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    arr: res
                })
            }
            )
      }
    render() {
        return (
            <div>
                <div className="recommInput">
                    <input type='text' placeholder='请输入搜索内容' onChange={this.change}/>
                    <Link to={{pathname:'/shouye/Search',state:{vcode:this.state.datas}}}><p className='fenleip1'>搜索</p></Link>
                </div>
                <div className="top3">
                    {/* <img src={require("../images/7.jpg")}/> */}
                    <WingBlank>
                        <Carousel
                        autoplay={false}
                        infinite
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                // src={`../images/${val}.png`}
                                src={require(`../images/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',height:'200px', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>


                <div className="ckb">
                        <div className="bangdan">
                            <h3 style={{"height":"20px","paddingLeft":"10px","color":"black"}}>豆瓣榜单</h3>
                                <div>
                                    <ul>
                                        <li>
                                            <Link to='/shouye/Doubantushu'><img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img></Link>
                                            <div style={{"float":"left","width":"200px"}}>
                                                <h3 style={{"color":"black"}}>top250</h3>
                                                <p style={{"color":"black"}}>摘自豆瓣图书排行榜top250，适合于部分入门读者食用</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div style={{"paddingLeft":"280px","borderBottom":"1px solid gainsboro","height":"30px","lineHeight":"30px","color":"black"}}></div>
                                </div>
                        </div>
                        <div className="remai">
                            <h3 style={{"height":"20px","paddingLeft":"10px","color":"black"}}>图书热卖榜</h3>
                                <div>
                                <ul>
                                    <li>
                                    <Link to='/shouye/Bookremai1'><img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img></Link>
                                        <div style={{"float":"left"}}>
                                            <h3 style={{"color":"black"}}>京东图书</h3>
                                            <p style={{"color":"black"}}>挑选正版书籍</p>
                                        </div>
                                    </li>
                                    <li>
                                    <Link to='/shouye/Bookremai2'><img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img></Link>
                                        <div style={{"float":"left"}}>
                                            <h3 style={{"color":"black"}}>当当图书</h3>
                                            <p style={{"color":"black"}}>享受优质服务</p>
                                        </div>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div style={{"paddingLeft":"280px","borderBottom":"1px solid gainsboro","height":"30px","lineHeight":"30px","color":"black"}}></div>
                    </div>
                </div>


                <div className="tip">
                    <div className="tipt"><h3 style={{"color":"black"}}>读书tip（我有一个想法）</h3></div>
                    <div className="tipchild">
                        <div>
                            {
                                this.state.arr.map((item, idx) =>
                                    <div className='pinglun1' key={idx} style={{ width: '99%', margin: '0 auto', height: '140px', marginTop: '5px', borderBottom: '1px solid black' }}>
                                        <h3 className='username' style={{ color: 'black' }}>{item.bookname}</h3>
                                        <div className='shanchupl' style={{width:'20px',height:'20px',float:'right',marginRight:'10px'}} onClick={this.deletepl.bind(this,item.id)}></div>
                                        <div style={{ width: '98%', overflow: 'auto', height: '80px', marginTop: '5px' }}><p className='content1' style={{ fontSize: '15px', color: 'black' }}>{item.content}</p></div>
                                        <span className='time' style={{ color: 'black', marginLeft: '50%' }}>{item.time}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                
            </div>

            
        )
    }
}
