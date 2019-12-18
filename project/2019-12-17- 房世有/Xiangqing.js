import React, { Component } from 'react' 
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '../Index/xiangqing.css'
import { constants } from 'crypto';
export default class Xiangqing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totaldata: [],
            data:'' ,
            scdata: [], 
            plarr:[],
            sctime: '',
            tuurl: '',
            sc: '收藏',
            author:'[意] 埃莱娜·费兰特',
            bname:'',
            cname: '',
            content: '',
            time: ''
        };
    }
    onclick1=()=>{
        this.props.history.go(-1);
    };
    change = (e) => {
        this.setState({
          content: e.target.value
        })
      };
      tijiao = () => {
        var lastname = localStorage.getItem('username');
        fetch('http://localhost:5000/pinglun', {
          method: 'POST',
          mode: "cors",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: lastname,
            bookname: this.state.bname,
            content: this.state.content,
            time: new Date().toLocaleString()
          })
        })
          .then(res => res.text())
          .then(res => {
            if (!res) {
              window.alert('提交失败');
            }
            else {
              this.setState({
                scdata: res
              })
            }
            console.log(res);
          }
          );
          this.props.history.go(0);
      };
    //   componentDidMount() {
    //     fetch('http://localhost:5000/pdshoucang', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json; charset=utf-8' },
    //       body: JSON.stringify({
    //         bname: this.state.bname,
    //         scdata: this.setState.scdata
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(res => {
    //         res.map((item) => {
    //           if (item.bname == this.state.bname) {
    //             this.setState({ sc: '已收藏' });
    //           }
    //         })
    //     }) 
    //   };
    // componentDidMount(){
    //     var data = this.props.location.state.name;
    //     this.setState({data:data})
    //     fetch("http://localhost:9000/text",{
    //         method: 'POST', // or 'PUT'
    //         body:JSON.stringify({name:data}), // data can be `string` or {object}!
    //         headers: 
    //           {"Content-Type": "application/json"}
    //     })
    //         .then(res => res.text())
    //         .then(res => {
    //             var d = JSON.parse(res);
    //             this.setState({ totaldata: d }) 
    //             // console.log(this.state.totaldata)
    //         });
    //     };
      shoucang = () => {
        if (this.state.sc == "收藏") {
          fetch('http://localhost:5000/shoucang', {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
              bname: this.state.bname,
              tuurl: this.state.tuurl,
              author: this.state.author,
              sctime: new Date().toLocaleString()
              
            })
          })
            .then(res => res.text())
            .then(res => {
              if (!res[0]) {
                window.alert('提交失败');
              }
              else {
                this.setState({
                  scdata: res[0]
                })
              }
              console.log(res);
            }
            )
          this.setState({ sc: '已收藏' });
        }
        else {
          fetch('http://localhost:5000/quxiaosc', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
              bname: this.state.bname
            })
          })
            .then(res => res.text())
            .then(res => {
              if (!res[0]) {
                console.log("删除失败");
              }
            }
            )
          this.setState({ sc: '收藏' });
        }
      }
      componentWillMount() {
        // console.log(this.props.location.state.name);
        var data = this.props.location.state.name;
        this.setState({data:data})
        fetch("http://localhost:9000/text",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:data}), // data can be `string` or {object}!
            headers: 
              {"Content-Type": "application/json"}
        }).then(res => res.text())
         .then(res => {
            var d = JSON.parse(res);
            d.map((d)=>{
                this.state.author = d.a;
                this.state.tuurl = d.src;
                this.state.bname = '《' + d.name +'》'
            })
            this.setState({ 
                totaldata:d
            })
        fetch('http://localhost:5000/pinglunxs', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            bookname: this.state.bname,
            cname:this.state.cname,
            plarr: this.state.plarr
        })
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                plarr: res
            })
        });
        fetch('http://localhost:5000/pdshoucang', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({
            bname: this.state.bname,
            scdata: this.setState.scdata
          })
        })
          .then(res => res.json())
          .then(res => {
            res.map((item) => {
              if (item.bname == this.state.bname) {
                this.setState({ sc: '已收藏' });
              }
            })
        })  
        });
    }

    render() {
        var arr = [];const brr = this.state.data;
        this.state.totaldata.map(function(name){
            arr[0] = name.src;
            arr[1] = name.div;
            arr[2] = name.span;
            arr[3] = name.p.slice(0,157);
            arr[4] = name.a;
            arr[5] = name.name;
            arr[6] = name.div.slice(0,74);
            arr[7] = name.div.slice(74,114);
            arr[8] = name.div.slice(300,340)
        })
        
        console.log('数据',arr,brr)
        if (arr != []) {
            
        setTimeout(function(){
            if (!arr.length) {
                console.log('lll')
            } else {
                console.log(arr)
                fetch('http://localhost:9000/historyadd',{
                    method:'POST',
                    body:JSON.stringify({title:arr[5],name:arr[6],press:arr[7],isbn:arr[8],img:arr[0],herf:brr}),
                    headers:{"Content-Type":"application/json"}
                }).then(res => res.text())
                .then(res =>{
                    console.log('success')
                })
            }
        },5000)
        return (
            <div style={{background:'#8f8b88',marginTop:'40px',position: 'relative'}}>
            <div className="header2">
                     <div className="fanhui1">
                     <img src={require('../images/3.png')} alt="" onClick={this.onclick1}/>
                     </div>
                     </div>
                <div className="bk">    
                    <div style={{"height":"250px","width":"170px"}}>
                        <img src={arr[0]} style={{height:'210px'}}></img>
                    </div>
                    <div style={{"height":"160px","width":"180px"}}>
                        <p style={{"marginTop":"30px"}}>书名: {'《'+arr[5]+'》'}</p>
                        <p>{arr[6]}</p>                           
                        <p>{arr[7]}</p>
                        <p>{arr[8]}</p>
                    </div>
                    <div >
                        <input type="button" value="想看" style={{float:'left'}}></input>
                        <input type="button" value="看过" style={{float:'left'}}></input>
                        <input id="sc" onClick={this.shoucang} type="button" value={this.state.sc}></input>
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
              <div>
                <textarea type="text" id="pinglun-xf" placeholder="看书的缘由，读书各个阶段的感想" style={{ width: '100%', height: '120px', textIndent: '2em',borderRadius:'8px',background:'#6d6c6a',color:'white' }} value={this.state.content} onChange={this.change}></textarea>
              <button style={{ width: '40%', height: '40px',color:'#fefdfb', lineHeight: '40px', marginLeft:'28%',background:'#6d6c6a',border:'none',borderRadius:'8px'}} onClick={this.tijiao}>提交</button></div>
            </li>
            </ul>
            <h4 style={{color:'#fefdfb',marginTop:'30px',marginLeft:'20px'}}>短评</h4>
          <div className='pinglunqu' style={{height:'300px',overflow: 'auto',marginTop:'20px'}}>
          {
              this.state.plarr.map((item, idx) =>
              <div className='pinglun1' key={idx} style={{ width: '99%', margin: '0 auto', height: '75px', marginTop: '5px', borderBottom: '1px solid black',borderRadius:'0px' }}>
                  <h3 className='username' style={{ color: '#fefdfb',flot:'left',height:'16px'}}>{item.username}</h3>
                  <div style={{ width: '98%', overflow: 'auto', height: '38px', marginTop: '5px',flot:"left"}}><p className='content1' style={{ fontSize: '15px', color: '#fefdfb' }}>{item.content}</p></div>
                  <span className='time' style={{ color: '#fefdfb', marginLeft: '50%' ,height:'16px'}}>{item.time}</span>
              </div>
          )
          }
          </div> 
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