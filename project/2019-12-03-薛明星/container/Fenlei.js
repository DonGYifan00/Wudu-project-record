import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Index/fenlei.css'
export default class Store extends Component {
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    change = (e) => {
        this.setState({
            data: e.target.value
        })
    }
    // getConnect =()=>{
    //     //console.log(window.location);
    //     //window.location.pathname="/shouye/Search";
    //     //window.location.state = 'xxx'
    //     this.props.history.push({pathname:'/shouye/Search',state:{vcode:this.state.data}})
    //     //window.location.href='http://localhost:3000/shouye/Search#$state='+{}

    // }
    // getConnect =()=>{
    //     fetch('http://localhost:9000/login',{
    //         method:'POST', 
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             username:this.state.name,
    //             password:this.state.pwd
    //         })
    //     })
    //     .then(res=>res.text())
    // .then(res=>{
    //   if(!res[0]) {
    //     window.alert('验证失败，用户名或密码错误');
    //   }
    //   else {
    //     this.setState({
    //       data:res[0]
    //     })
    //     this.props.history.push('/shouye');
    //     // window.location.reload();
    //   }
    // } 
    // )
    // }
    render() {
        return (
            <div>
                <div className='fenleidiv1'>
                <div className="recommInput">
                    <input type='text' placeholder='请输入搜索内容' onChange={this.change}/>
                    <Link to={{pathname:'/shouye/Search',state:{vcode:this.state.data}}}><p className='fenleip1'>搜索</p></Link>
                </div>
                </div>
                <div className='fenleidiv4'>
                <Link to='/shouye/tuijian/tuixiaoshuo'><div className='fenleidiv5'><p className='fenleip2'>小说</p></div></Link>
                    <Link to='/shouye/tuijian/tuixiqu'><div className='fenleidiv5'><p className='fenleip2'>戏曲</p></div></Link>
                    <Link to='/shouye/tuijian/tuiwenxue'><div className='fenleidiv5'><p className='fenleip2'>文学</p></div></Link>
                    <Link to='/shouye/tuijian/tuishige'><div className='fenleidiv5'><p className='fenleip2'>诗歌</p></div></Link>
                    <Link to='/shouye/tuijian/tuizhuanji'><div className='fenleidiv5'><p className='fenleip2'>传记</p></div></Link>
                    <Link to='/shouye/tuijian/tuizhexue'><div className='fenleidiv6'><p className='fenleip2'>哲学</p></div></Link>
                    <Link to='/shouye/tuijian/tuilishi'><div className='fenleidiv6'><p className='fenleip2'>历史</p></div></Link>
                    <Link to='/shouye/tuijian/tuiyishu'><div className='fenleidiv6'><p className='fenleip2'>艺术</p></div></Link>
                    <Link to='/shouye/tuijian/tuixinli'><div className='fenleidiv6'><p className='fenleip2'>心理</p></div></Link>
                    <Link to='/shouye/tuijian/tuijiaoyu'><div className='fenleidiv6'><p className='fenleip2'>教育</p></div></Link>
                    <Link to='/shouye/tuijian/tuishenghuo'><div className='fenleidiv6'><p className='fenleip2'>生活</p></div></Link>
                    <Link to='/shouye/tuijian/tuilvxing'><div className='fenleidiv6'><p className='fenleip2'>旅行</p></div></Link>
                    <Link to='/shouye/tuijian/tuijiaju'><div className='fenleidiv6'><p className='fenleip2'>家居</p></div></Link>
                    <Link to='/shouye/tuijian/tuimeishi'><div className='fenleidiv6'><p className='fenleip2'>美食</p></div></Link>
                    <Link to='/shouye/tuijian/tuiyuyan'><div className='fenleidiv6'><p className='fenleip2'>语言</p></div></Link>
                </div>
                <Link to='/shouye/fenlei'>
                    <div className='fenleidiv7'>
                        <p className='fenleip3'>查&ensp;看&ensp;更&ensp;多&ensp;内&ensp;容</p>
                    </div>
                </Link>
                <div style={{"height":"40px","width":"100%","float":"left","marginTop":"20px"}}>
                    <p style={{"float":"left"}}>图书推荐</p>
                </div>
                <div style={{"float":"left","height":"350px","width":"100%"}}>
                    <ul>
                        <li style={{"height":"150px","width":"100%","marginTop":"15px"}}>
                            <Link to='/shouye/tuijian/tushuxiangqing1'><img src={require("../images/book1.jpg")} style={{"height":"150px",
                            "width":"35%","float":"left"}}></img></Link>
                            <ul style={{"height":"100px","width":"50%","float":"left","marginLeft":"10%","marginTop":"10px"}}>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>失踪的孩子</li>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>评分9.1</li>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>作者： [意] 埃莱娜·费兰特/2018/人民文学出版社</li>
                            </ul>
                        </li>
                        <li style={{"height":"150px","width":"100%","marginTop":"15px"}}>
                            <Link to='/shouye/tuijian/tushuxiangqing2'><img src={require("../images/book2.jpg")} style={{"height":"150px",
                            "width":"35%","float":"left"}}></img></Link>
                            <ul style={{"height":"100px","width":"50%","float":"left","marginLeft":"10%","marginTop":"10px"}}>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>追寻逝去的时光</li>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>评分9.2</li>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>作者：[法] 马塞尔·普鲁斯特/2018年/湖南美术出版社</li>
                            </ul>
                        </li>
              
                        <li style={{"height":"150px","width":"100%","marginTop":"15px"}}>
                        <Link to='/shouye/tuijian/tushuxiangqing3'><img src={require("../images/book3.jpg")} style={{"height":"150px",
                        "width":"35%","float":"left"}}></img></Link>
                            <ul style={{"height":"100px","width":"50%","float":"left","marginLeft":"10%","marginTop":"10px"}}>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>房思琪的初恋乐园</li>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>评分9.2</li>
                                <li style={{"width":"100%","height":"30px","marginTop":"3px"}}>作者：林奕含/2018年/北京联合出版公司</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div style={{"height":"30px","width":"100%","float":"left","marginTop":"160px"}}>
                    <p style={{"float":"left"}}>其他</p>
                    
                </div>
                <div style={{"height":"200px","width":"100%","float":"left","marginTop":"10px"}}>
                    <Link to='/shouye/tuijian/tushuxiangqing4'><img src={require("../images/book4.jpg")} style={{"height":"150px","float":"left",
                    "width":"28%","marginLeft":"2%"}}></img></Link>
                    <Link to='/shouye/tuijian/tushuxiangqing5'><img src={require("../images/book5.jpg")} style={{"height":"150px","width":"28%",
                    "float":"left","marginLeft":"5%"}}></img></Link>
                    <Link to='/shouye/tuijian/tushuxiangqing5'><img src={require("../images/30.jpg")} style={{"height":"150px","width":"28%",
                    "float":"left","marginLeft":"5%"}}></img></Link>
                </div>
                <div className="fenleidiv10"></div>
                
            </div>
        )
    }
}
