import React from 'react';
import {Link} from 'react-router-dom'

export default function Recommend(){
        return <div className="header">
            <header>
                <div className="recommInput">
                <input type="text" />
                <button>搜索</button>
                </div>
                <div className="fenlei">
                    <Link to="/tuijian">推荐</Link>
                    <Link to="/shige">诗歌</Link>
                    <Link to="/xiaoshuo">小说</Link>
                    <Link to="/sanwen">散文</Link>
                    <Link to="/zhuanji">传记</Link>
                    <Link to="/zhexue">哲学</Link>
                    <Link to="/renwen">人文</Link>
                    <Link to="/lvxing">旅行</Link>
                    <Link to="/xiqu">戏曲</Link>
                </div>
            </header>
            </div>
}