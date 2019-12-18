import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Index/tuijian.css'
export default class Store extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div className="recommInput">
                <input type="text" placeholder='请输入搜索内容' />
                <button>搜索</button>
                </div>
                <div className="fenlei1" style={{height:"90px",marginTop:"40px"}}>
                    <p>专题</p>
                    <Link to='/shouye/fenlei/yingshiyuanzhu'><div className="yangshi-bg"><div className="yangshi">影视原著</div></div></Link>
                    <Link to='/shouye/fenlei/mingzhujingdian'><div className="yangshi1-bg"><div className="yangshi">名著经典</div></div></Link>
                </div>
                <div className="fenlei1">
                <p>精神避难所</p>
                <Link to='/shouye/fenlei/wenxue'><div className="yangshi2-bg"><div className="yangshi">文学</div></div></Link>
                <Link to='/shouye/fenlei/shige'><div className="yangshi3-bg"><div className="yangshi">诗歌</div></div></Link>
                <Link to='/shouye/fenlei/xiaoshuo'><div className="yangshi4-bg"><div className="yangshi">小说</div></div></Link>
                <Link to='/shouye/fenlei/sanwen'><div className="yangshi1-bg"><div className="yangshi">散文</div></div></Link>
                <Link to='/shouye/fenlei/xiqu'><div className="yangshi-bg"><div className="yangshi">戏曲</div></div></Link>
                <Link to='/shouye/fenlei/zhuanji'><div className="yangshi2-bg"><div className="yangshi">传记</div></div></Link>
                <Link to='/shouye/fenlei/zhexue'><div className="yangshi3-bg"><div className="yangshi">哲学</div></div></Link>
                <Link to='/shouye/fenlei/lishi'><div className="yangshi4-bg"><div className="yangshi">历史</div></div></Link>
                <Link to='/shouye/fenlei/yishu'><div className="yangshi-bg"><div className="yangshi">艺术</div></div></Link>
                </div>
                <div className="fenlei1">
                    <p>生活启示录</p>
                    <Link to='/shouye/fenlei/xinli'><div className="yangshi2-bg"><div className="yangshi">心理</div></div></Link>
                    <Link to='/shouye/fenlei/jiaoyu'><div className="yangshi3-bg"><div className="yangshi">教育</div></div></Link>
                    <Link to='/shouye/fenlei/shenghuo'><div className="yangshi4-bg"><div className="yangshi">生活</div></div></Link>
                    <Link to='/shouye/fenlei/huihua'><div className="yangshi-bg"><div className="yangshi">绘画</div></div></Link>
                    <Link to='/shouye/fenlei/yuyan'><div className="yangshi1-bg"><div className="yangshi">语言</div></div></Link>
                    <Link to='/shouye/fenlei/lvxing'><div className="yangshi4-bg"><div className="yangshi">旅行</div></div></Link>
                    <Link to='/shouye/fenlei/jiaju'><div className="yangshi3-bg"><div className="yangshi">家居</div></div></Link>
                    <Link to='/shouye/fenlei/meishi'><div className="yangshi2-bg"><div className="yangshi">美食</div></div></Link>
                </div>
                <div className="fenlei1">
                    <p>职业成长营</p>
                    <Link to='/shouye/fenlei/jianzhu'><div className="yangshi1-bg"><div className="yangshi">建筑</div></div></Link>
                    <Link to='/shouye/fenlei/falv'><div className="yangshi2-bg"><div className="yangshi">法律</div></div></Link>
                    <Link to='/shouye/fenlei/sheji'><div className="yangshi4-bg"><div className="yangshi">设计</div></div></Link>
                    <Link to='/shouye/fenlei/keji'><div className="yangshi-bg"><div className="yangshi">科技</div></div></Link>
                    <Link to='/shouye/fenlei/hulianwang'><div className="yangshi2-bg"><div className="yangshi">互联网</div></div></Link>
                    <Link to='/shouye/fenlei/jisuanji'><div className="yangshi3-bg"><div className="yangshi">计算机</div></div></Link>
                    <Link to='/shouye/fenlei/jingji'><div className="yangshi1-bg"><div className="yangshi">经济</div></div></Link>
                    <Link to='/shouye/fenlei/guanli'><div className="yangshi4-bg"><div className="yangshi">管理</div></div></Link>
                    <Link to='/shouye/fenlei/guanggao'><div className="yangshi2-bg"><div className="yangshi">广告</div></div></Link>
                </div>
            </div>
        )
    }
}
