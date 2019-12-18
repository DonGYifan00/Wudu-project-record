import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../Index/xiangqing.css'
export default class Tuixiangqing1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      arr:[],
      bname:'《追寻逝去的时光》',
      sctime:'',
      tuurl: 'https://img1.doubanio.com/view/subject/l/public/s29881117.jpg',
      sc:'收藏',
      author:'[法] 马塞尔·普鲁斯特',
      name: '',
      content: '',
      time: ''
    }
  };
  change = (e) => {
      this.setState({
        content: e.target.value
      })
    };
  onclick = () => {
    this.props.history.go(-1);
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
            data: res
          })
        }
        console.log(res);
      }
      );
      this.props.history.go(0);
  };
  componentWillMount() {
    fetch('http://localhost:5000/pdshoucang', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        bname: this.state.bname,
        data: this.setState.data
      })
    })
      .then(res => res.json())
      .then(res => {
        res.map((item) => {
          if (item.bname == this.state.bname) {
            this.setState({ sc: '已收藏' });
          }
        })
      }
      );
      fetch('http://localhost:5000/pinglunxs', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            bookname: this.state.bname,
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
        );
  };
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
              data: res[0]
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
  render() {
    return (
      <div style={{background:'#8f8b88',marginTop:'40px',position: 'relative'}}>
       <div className="header2">
                <div className="fanhui1">
                <img src={require('../images/3.png')} alt="" onClick={this.onclick}/>
                </div>
                </div>
        <div className="bk">
          <div style={{ "height": "260px", "width": "170px" }}>
            <img src={this.state.tuurl}></img>
          </div>
          <div style={{ "height": "260px", "width": "120px" }}>
            <p style={{ "marginTop": "30px" }}>{this.state.bname}</p>
            <p>[意] 埃莱娜·费兰特</p>
            <p> 小说   外国文学   意大利文学   埃莱娜•费兰特</p>
            <p>23677人推荐</p>
          </div>
          <div style={{ "height": "260px", "width": "80px" }}>
            <input type="button" value="想看"></input>
            <input type="button" value="看过"></input>
            <input id="sc" onClick={this.shoucang} type="button" value={this.state.sc}></input>
          </div>
        </div>
        <div className="jianjie">
          <ul>
            <li>
              <h4>简介（翻译外国的出版物附加译者简介）</h4>
              <div><p style={{"paddingTop": "10px",textIndent:'2em',color:'#fefdfb'}}>《失踪的孩子》是“那不勒斯四部曲”的第四部，小 说聚焦了莉拉和埃莱娜（“我”）的壮年和晚年，为她们持续了五十多年的友谊划上了一个令人心碎的句号。</p></div>
            </li>
            <li>
              <h4>出版社简介及所属丛书系列简介</h4>
              <div>
                <p style={{ "paddingTop": "30px" ,textAlign:'center',color:'#fefdfb'}}>
                  人民文学出版社<br />　那不勒斯四部曲 (共4册), 这套丛书还有 《我的天才女友》,《新名字的故事》,《离开的，留下的》</p>
              </div>
            </li>
            <li>
              <h4>我的想法</h4>
              <div>
                <textarea type="text" id="pinglun-xf" placeholder="看书的缘由，读书各个阶段的感想" style={{ width: '100%', height: '120px', textIndent: '2em',borderRadius:'8px',background:'#6d6c6a',color:'white' }} value={this.state.content} onChange={this.change}></textarea>
              <button style={{ width: '40%', height: '40px',color:'#fefdfb', lineHeight: '40px', marginLeft:'28%',background:'#6d6c6a',border:'none',borderRadius:'8px'}} onClick={this.tijiao}>提交</button></div>
            </li>
          </ul>
          <div className='pinglunqu' style={{height:'400px',overflow: 'auto',marginTop:'20px'}}>
          {
              this.state.arr.map((item, idx) =>
              <div className='pinglun1' key={idx} style={{ width: '99%', margin: '0 auto', height: '75px', marginTop: '5px', borderBottom: '1px solid black' }}>
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
