import React, { Component } from 'react'
import './tuijiananniu.css'
export default class Store extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div className="recommInput">
                <input type="text" />
                <button>搜索</button>
                </div>
                <div className="fenlei1" style={{height:"90px"}}>
                    <p>专题</p>
                    <div style={{backgroundImage:('../images/1.png')}}>影视原著</div>
                    <div>名著经典</div>
                </div>
                <div className="fenlei1">
                    <p>精神避难所</p>
                    <div>文学</div>
                    <div>诗歌</div>
                    <div>小说</div>
                    <div>散文</div>
                    <div>戏曲</div>
                    <div>传记</div>
                    <div>哲学</div>
                    <div>历史</div>
                    <div>艺术</div>
                </div>
                <div className="fenlei1">
                    <p>生活启示录</p>
                    <div>心理</div>
                    <div>教育</div>
                    <div>生活</div>
                    <div>摄影</div>
                    <div>绘画</div>
                    <div>语言</div>
                    <div>旅行</div>
                    <div>家居</div>
                    <div>美食</div>
                </div>
                <div className="fenlei1">
                    <p>职业成长营</p>
                    <div>建筑</div>
                    <div>法律</div>
                    <div>设计</div>
                    <div>科技</div>
                    <div>互联网</div>
                    <div>计算机</div>
                    <div>经济</div>
                    <div>管理</div>
                    <div>广告</div>
                </div>
                
            </div>
        )
    }
}
