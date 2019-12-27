import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './css/indexldq.css'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:'',
            email:''
        };
        console.log(this.state)
      }
      handleGetInputValue = (event) => {
        this.setState({
          username : event.target.value,
          // password : event.target.value,
          // email : event.target.value
        })
      };
      handleGetInputValue1 = (event) => {
        this.setState({
          //username : event.target.value,
          password : event.target.value,
          // email : event.target.value
        })
      };
      handleGetInputValue2 = (event) => {
        this.setState({
          //username : event.target.value,
          // password : event.target.value,
           email : event.target.value
        })
      };
      handlePost = () => {
        console.log(this.state);
        fetch('http://localhost:9000/register',{
            method:'POST',
            body:JSON.stringify({username:this.state.username,password:this.state.password,email:this.state.email}),
            headers: {'Content-Type': 'application/json'}
        }).then(res=>{res.text()}).then(res=>{console.log('success')})
        //在此做提交操作，比如发dispatch等
      };


    // componentDidMount() {
    //     fetch("http://localhost:9000/register",{
    //         method: 'POST', // or 'PUT'
    //         body:JSON.stringify({}), // data can be `string` or {object}!
    //         headers: 
    //         {"Content-Type": "application/json"}
    //         })
    //         .then(res => res.text())
    //         .then(res => {
    //             var d = JSON.parse(res);
    //             this.setState({ totaldata: d })
    //             console.log(d)
    //         })
    // }
    render() {
        let { username, password,email } = this.state;
        return (
            <div style={{width:'100%',textAlign:'center',background:'#fff'}}>    
            <p style={{display:"inline-block",width:"100%",height:50,paddingTop:'10px',color:"white",fontSize:20,background:'rgb(149, 170, 184)'}}>注册</p>    
            <WhiteSpace />
            <Flex align="start">
              <div className='placeholder'>
                <div className='img' style={{position:'relative'}}>
                    <img src={require('../images/shu.png')} style={{width:'60px',height:'65px'}}/>
                    <span style={{position:'absolute',right:'-8px',bottom:'-10px',color:'black',fontSize:'20px'}}>+</span>
                </div>
                <form action="" className='form'>
                  <input  placeholder='昵称' type="text" name="username" value={username} onChange={this.handleGetInputValue} />
                  <input placeholder='密码' type="text" name="password" value={password} onChange={this.handleGetInputValue1}/>
                  <input  placeholder='Email' type="text" name="email" value={email} onChange={this.handleGetInputValue2}/>
                  
                  <p></p>
                  <Link to='/apphome'>
                    <input type='submit' onClick={this.handlePost} value='注册' style={{background:'#8693a6',color:'#fff'}}/>
                  </Link>
                </form>
              </div>
            </Flex>
            <p><Link style={{color:'#bbb'}} to='/login'>已有账号了？点击登录</Link></p>
            <WhiteSpace />
         </div>
        )
    }
}
