import React, { Component } from 'react';
import { NavBar,Icon,Tabs ,Carousel, WingBlank, SearchBar } from 'antd-mobile';
import {Button,List} from 'antd-mobile'
import '../Index/Grate.css'
export default class Grate extends Component {
  render() {
    return (
        <div >  
          <div>
            <List style={{"width":"100%"}}>
              <List.Item style={{"flex":"none","width":"100%"}}
              extra={<Button type='primary' inline
              style={{"textAlign":"center","float":"left","marginLeft":"40px"}}>首页</Button>}>
              <WingBlank style={{"width":"250px"}}>
                <SearchBar placeholder='请输入搜索内容' style={{"width":"220px"}}/>
              </WingBlank>
              </List.Item>
            </List>
          </div>
          <div className='div1' style={{"height":"30px","backgroundColor":"white"}}>
            <button style={{"marginLeft":"20px"}}>全部</button>
            <button>诗歌</button>
            <button>小说</button>
            <button>散文</button>
            <button>传记</button>
            <button>哲学</button>
            <button>人文</button>
            <button>旅行</button>
          </div>
          <div className='div2' style={{"height":"40px"}}>
            <button>更多内容</button>
          </div>
          <div className='div3' style={{"height":"40px","width":"50%"}}>
            <button style={{"width":"20%","float":"left","height":"40px","backgroundColor":"white"}}>+</button>
            <input type='text' placeholder="请输入自定义的标签" style={{"float":"left","width":"80%","height":"40px"}}/>
          </div>
          <div className="div4" style={{"width":"100%","height":"30px","margin":"0 auto"}}>
            <p style={{"float":"left","marginTop":"5px","marginLeft":"30px"}}>图书列表</p>
            <button style={{"float":"right","height":"20px","width":"30px",
            "border":"none","marginRight":"30px","backgroundColor":"white",
            "marginTop":"5px"}}>筛选</button>
          </div>
          <div style={{"height":"350px","margin":"0 auto","width":"100%","float":"left"}}>
            <ul>
              <li style={{"marginTop":"15px","height":"100px","width":"45%","clear":"both"}}>
                <img src={require("../images/2.jpg")} style={{"width":"100%","height":"100%"}}></img>
              </li>
              <ul style={{"width":"50%","height":"100px","float":"right","marginTop":"15px"}}>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    图书名称
                  </li>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    评分：8.9
                  </li>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    作者：xxx/xxxx年/xxxx出版社
                  </li>
                </ul>
              <li style={{"marginTop":"15px","height":"100px","width":"45%","clear":"both"}}>
                <img src={require("../images/2.jpg")} style={{"width":"100%","height":"100%"}}></img>
              </li>
              <ul style={{"width":"50%","height":"100px","float":"right","marginTop":"15px"}}>
                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    图书名称
                  </li>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    评分：8.9
                  </li>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    作者：xxx/xxxx年/xxxx出版社
                  </li>
                </ul>
              <li style={{"marginTop":"15px","height":"100px","width":"45%","clear":"both"}}>
                <img src={require("../images/2.jpg")} style={{"width":"100%","height":"100%"}}></img>
              </li>
              <ul style={{"width":"50%","height":"100px","float":"right","marginTop":"15px"}}>
                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    图书名称
                  </li>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    评分：8.9
                  </li>
                  <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>
                    作者：xxx/xxxx年/xxxx出版社
                  </li>
                </ul>
            </ul>
          </div>
          <div style={{"height":"40px","width":"100%","float":"left"}}>
            <p style={{"float":"left","marginTop":"10px"}}>这儿有800个相关书单</p>
            <button style={{"width":"80px","float":"right","marginTop":"8px"}}>查看全部</button>
          </div>
          <div style={{"width":"100%","height":"110px","float":"left"}}>
            <img src={require("../images/2.jpg")}
            style={{"width":"30%","height":"90px","marginTop":"5px",
            "float":"left"}}></img>
            <img src={require("../images/2.jpg")}
            style={{"width":"30%","height":"90px","marginTop":"5px",
            "float":"left","marginLeft":"5%"}}></img>
            <button style={{"float":"left","width":"30%","height":"20px",
            "float":"left","marginLeft":"5%","marginTop":"70px"}}>点击查看更多</button>
          </div>
          <div style={{"width":"100%","height":"20px","float":"left"}}>
            <p>阅读推荐</p>
          </div>
          <div style={{"width":"100%","height":"100px","float":"left"}}>
            <ul>
              <li style={{"float":"left","height":"20px","backgroundColor":"white"
              ,"width":"20%","textAlign":"center"}}>教育</li>
              <li style={{"float":"left","height":"20px","backgroundColor":"white"
              ,"width":"20%","textAlign":"center","marginLeft":"6%"}}>经济</li>
              <li style={{"float":"right","height":"20px","backgroundColor":"white"
              ,"width":"20%","textAlign":"center"}}>家居</li>
              <li style={{"float":"right","height":"20px","backgroundColor":"white"
              ,"width":"20%","textAlign":"center","marginRight":"6%"}}>生活</li>
            </ul>
            <button style={{"width":"100%","height":"30px","backgroundColor":"white",
            "borderColor":"white","marginTop":"10px"}}>查看更多推荐</button>
          </div>
          <div style={{"width":"100%","height":"20px","float":"left"}}>
            <p>新闻早知</p>
          </div>
          <div style={{"height":"250px","width":"100%","float":"left"}}>
            <ul>
              <li style={{"height":"100px"}}>
                <img src={require("../images/2.jpg")}
                style={{"width":"40%","height":"100%"}}></img>
                <div style={{"height":"100px","width":"50%","float":"right"}}>
                  <p>xxxx年xx月xx日 电：</p>
                  <p>某位知名作家在某地举办书展，许多人都慕</p>
                  <button style={{"width":"90px","height":"20px","float":"left"}}>点击展开全文</button>
                  <p style={{"float":"left","marginTop":"5px"}}>薛腾飞记者报道</p>
                </div>
              </li>
              <li style={{"height":"100px"}}>
                <img src={require("../images/2.jpg")}
                style={{"width":"40%","height":"100%"}}></img>
                <div style={{"height":"100px","width":"50%","float":"right"}}>
                  <p>xxxx年xx月xx日 电：</p>
                  <p>某位知名作家在某地举办书展，许多人都慕</p>
                  <button style={{"width":"90px","height":"20px","float":"left"}}>点击展开全文</button>
                  <p style={{"float":"left","marginTop":"5px"}}>薛腾飞记者报道</p>
                </div>
              </li>
            </ul>
          </div>
          <button style={{"width":"100%","height":"50px","backgroundColor":"lightgreen",
          "borderColor":"white"}}>刷新查看更多新闻</button>
          <button style={{"width":"50%","height":"30px","float":"right",
          "marginTop":"10px","borderColor":"white"}}>点击返回顶部</button>
          <p style={{"width":"100%","height":"30px","float":"left","marginTop":"10px"}}>今日励志话语推荐:</p>
          <div style={{"width":"100%","height":"50px","float":"left",
          "backgroundColor":"white","textAlign":"center"}}>
            <p style={{"width":"100%","height":"40px","marginTop":"15px"}}>将来的你一定会感谢现在拼命的自己</p>
          </div>
          <div style={{"width":"100%","height":"20px","float":"left",
          "marginTop":"10px"}}></div>
        </div>
      )
  }
}
