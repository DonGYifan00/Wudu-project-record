import React, { Component } from 'react'

export default class tushuxiangqing extends Component {
    render() {
        return (
            <div>
                <div className="top">
                    <input type="text" name="top" placeholder="单行输入"></input>
                    <input type="button" name="top" value="搜索"/>
                </div>
                <div className="bk">
                    <div style={{"height":"260px","width":"170px"}}>
                        <img src="https://p1.ssl.qhimg.com/dr/220__/t0162673851cf001470.jpg"></img>
                    </div>
                    <div style={{"height":"260px","width":"120px"}}>
                        <p style={{"marginTop":"30px"}}>书名及作者</p>                            
                        <p>出版社及isbn</p>                            
                        <p>标签</p>
                        <p>被多少人推荐</p>
                    </div>
                    <div style={{"height":"260px","width":"80px"}}>
                        <input type="button" value="想看"></input>
                        <input type="button" value="看过"></input>
                    </div> 
                </div>
                <div className="jianjie">
                    <ul>
                        <li>
                            <h4>简介（翻译外国的出版物附加译者简介）</h4>
                            <div></div>
                        </li>
                        <li>
                            <h4>出版社简介及所属丛书系列简介</h4>
                            <div>
                                <p style={{"paddingTop":"30px"}}>
                                    上海译文出版社<br/>译文名著文库系列丛书及译文名著精选
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4>我的想法</h4>
                            <div  style={{"lineHeight":"120px"}}>
                                <p>看书的缘由，读书各个阶段的感想</p>
                            </div>
                        </li>
                        <li>
                            <h4>我的文章</h4>
                            <div><p style={{"paddingTop":"30px"}}>旨在提供偏向私人化的读后感，或者是仿写，亦或是简单的长评感想</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
