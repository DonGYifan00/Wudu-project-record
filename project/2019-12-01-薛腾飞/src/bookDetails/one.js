import React, { Component } from 'react'
export default class Detailbooks extends Component {
    render() {
        return (
            <div>
                <div className="top">
                    <input type="text" name="top" placeholder="单行输入"></input>
                    <input type="button" name="top" value="搜索"/>
                </div>
                <div className="top2">
                    <ul>
                        <li style={{"marginLeft":"5%"}}>
                            <p style={{"paddingTop":"17px"}}>找到一本新书</p>
                            <p>（一个想法）</p>
                        </li>
                        <li style={{"marginLeft":"10%"}}>
                            <p style={{"paddingTop":"17px"}}>找我想看的书</p>
                            <p>（搜索）</p>
                        </li>
                        <li style={{"marginLeft":"10%"}}>
                            <p style={{"paddingTop":"17px"}}>想看同类的书</p>
                            <p>（分类查找）</p>
                        </li>
                    </ul>
                </div>
                <div className="top3">
                    <div>
                        <div style={{"backgroundColor":"blue","width":"100%","height":"20px","textAlign":"center"}}>我想看新出的书</div>
                        <img src="https://p0.ssl.qhimgs1.com/sdr/400__/t016eb1e79e6f796b24.jpg"/>
                    </div>
                    <div>
                        <ul>
                            <li>种类</li>
                            <li>换一批</li>
                        </ul>
                    </div>
                </div>
                <div className="ckb">
                    <div style={{"height":"20px","backgroundColor": "white","marginTop":"15px","lineHeight": "20px","textAlign": "center"}}>可以参考的榜单</div>
                    <div className="bangdan">
                        <div style={{"borderBottom":"1px solid gainsboro","lineHeight":"30px","height":"30px","paddingLeft":"10px"}}>豆瓣榜单</div>
                        <div>
                            <ul>
                                <li>
                                    <img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img>
                                    <div style={{"float":"left"}}>
                                        <h3>虚构类</h3>
                                        <p>每周一更新</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img>
                                    <div style={{"float":"left"}}>
                                        <h3>非虚构类</h3>
                                        <p>每周三更新</p>
                                    </div></li>
                                <li>
                                    <img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img>
                                    <div style={{"float":"left","width":"200px"}}>
                                        <h3>top250</h3>
                                        <p>摘自豆瓣图书排行榜top250，适合于部分入门读者食用</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{"paddingLeft":"10px"}}>查看更多<span style={{"paddingLeft":"240px"}}>></span></div>
                    </div>
                    <div className="remai">
                    <div style={{"borderBottom":"1px solid gainsboro","lineHeight":"30px","height":"30px","paddingLeft":"10px"}}>图书热卖榜</div>
                        <div>
                            <ul>
                                <li>
                                    <img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img>
                                    <div style={{"float":"left"}}>
                                        <h3>京东图书</h3>
                                        <p>挑选正版书籍</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img>
                                    <div style={{"float":"left"}}>
                                        <h3>当当图书</h3>
                                        <p>享受优质服务</p>
                                    </div></li>
                                <li>
                                    <img src="https://ps.ssl.qhimg.com/t01b9e7390ab1a83888.jpg"></img>
                                    <div style={{"float":"left"}}>
                                        <h3>亚马逊图书</h3>
                                        <p>看看外国人喜欢啥</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{"paddingLeft":"10px"}}>查看更多<span style={{"paddingLeft":"240px"}}>></span></div>
                    </div>
                </div>
                <div className="tip">
                    <div className="tipt">读书tip（我有一个想法）</div>
                    <div className="tipchild">
                        <div>
                            <ul>
                                <li>
                                <div style={{"borderBottom":"1px solid gainsboro","lineHeight":"30px","height":"30px"}}>文字列表附来源</div>
                                    <h2>标题</h2>
                                    <p>由各种物质组成的巨型球状天体，叫做星球，星球有一定的形状，有自己的运行轨道...</p>
                                    <p>文字来源 时间 | 其他信息</p>
                                </li>
                                <li>
                                <div style={{"borderBottom":"1px solid gainsboro","lineHeight":"30px","height":"30px"}}>文字列表附来源</div>
                                    <h2>标题</h2>
                                    <p>由各种物质组成的巨型球状天体，叫做星球，星球有一定的形状，有自己的运行轨道...</p>
                                    <p>文字来源 时间 | 其他信息</p>
                                </li>
                                <li>
                                <div style={{"borderBottom":"1px solid gainsboro","lineHeight":"30px","height":"30px"}}>文字列表附来源</div>
                                    <h2>标题</h2>
                                    <p>由各种物质组成的巨型球状天体，叫做星球，星球有一定的形状，有自己的运行轨道...</p>
                                    <p>文字来源 时间 | 其他信息</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
