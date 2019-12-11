import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '../Index/xiangqing.css'
import { constants } from 'crypto';
export default class tushuxiangqing extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: [] };
    }
    
    componentDidMount() {
        console.log(this.props.location.state.name);
        var data = this.props.location.state.name;
        fetch("http://localhost:9000/text",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:data}), // data can be `string` or {object}!
            headers: 
              {"Content-Type": "application/json"}
        })
            .then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
                console.log(this.state.totaldata)
            })

    }

    render() {
        var arr = []
        this.state.totaldata.map(function(name){
            arr[0] = name.src;
            arr[1] = name.div;
            arr[2] = name.span;
            arr[3] = name.p.slice(0,157);
            arr[4] = name.a;
            arr[5] = name.name
            arr[6] = name.div.slice(0,74)
            arr[7] = name.div.slice(74,114)
            arr[8] = name.div.slice(300,340)
        })
        
        console.log(arr)
        if (arr != []) {
            
        setTimeout(function(){
            if (!arr.length) {
                console.log('lll')
            } else {
                console.log(arr)
                fetch('http://localhost:9000/historyadd',{
                    method:'POST',
                    body:JSON.stringify({title:arr[5],name:arr[6],press:arr[7],isbn:arr[8],img:arr[0]}),
                    headers:{"Content-Type":"application/json"}
                }).then(res => res.text())
                .then(res =>{
                    console.log('success')
                })
            }
        },5000)
        return (
            <div>
                
                    <div style={{"backgroundColor":"lightgray","height":"30px","width":"15%","textAlign":"center"}}>
                        <p style={{"color":"white","fontSize":"25px"}}>back</p>
                    </div>
                <div className="top">
                    <input type="text" name="top" placeholder="单行输入"></input>
                    
                </div>
                <div className="bk">    
                    <div style={{"height":"250px","width":"170px"}}>
                        <img src={arr[0]} style={{height:'210px'}}></img>
                    </div>
                    <div style={{"height":"160px","width":"180px"}}>
                        <p style={{"marginTop":"30px"}}>书名: {arr[5]}</p>
                        <p>{arr[6]}</p>                           
                        <p>{arr[7]}</p>
                        <p>{arr[8]}</p>
                    </div>
                    <div >
                        <input type="button" value="想看" style={{float:'left'}}></input>
                        <input type="button" value="看过" style={{float:'left'}}></input>
                    </div> 
                </div>
                <div className="jianjie">
                    <ul>
                        <li>
                            <h4>简介（翻译外国的出版物附加译者简介）</h4>
                            <div>{arr[3]}</div>
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
}
// $('#wrapper').each(function(index, element) {
                
//     //var $img = $(element).find('img');
//     var $img = $(element).find('#mainpic img')
//     var $span = $(element).find('#info span')
//     var $div = $(element).find('#info')
//     var $strong = $(element).find('#interest_sectl .ll rating_num')
//     var $p = $(element).find('.indent .intro')
//     items.push({
//         index:index,
//         src:$img.attr('src'),
//         span:$span.text(),
//         div:$div.text(),
//         strong:$strong.text(),
//         p:$p.text()
        
//     });
// });