import React, { Component } from 'react'
import './tuijiananniu.css'
import {Link} from 'react-router-dom'
export default class Zhexue extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: [] };
      }
    
    
    componentDidMount() {
        fetch("http://localhost:9000/index",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:encodeURI('哲学')}), // data can be `string` or {object}!
            headers: 
            {"Content-Type": "application/json"}
            })
            .then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
                console.log(d)
            })
    }
    onclick=()=>{
        this.props.history.go(-1);
    }
    onclick2=()=>{//上一页
        console.log(this.state.page);
        const state = this.state;
        if(state.page == 0){
            state.page = 0;
        }
        else{
            state.page -= 20;
            console.log(state.page);
        }
        this.setState(state);
        fetch("http://localhost:9000/pages",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({
                name:encodeURI('法律'),
                bool:false,
                page:this.state.page
            }), 
            headers: 
            {"Content-Type": "application/json"}
            })
            .then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
                console.log(d)
            })
    }
    onclick3=()=>{//下一页
        
        const state = this.state;
        state.page += 20;
        this.setState(state);
        console.log(this.state.page)
        fetch("http://localhost:9000/pages",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify(
                {
                    name:encodeURI('法律'),
                    bool:true,
                    page:this.state.page
                }
            ), // data can be `string` or {object}!
            headers: 
            {"Content-Type": "application/json"}
            })
            .then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
                console.log(d)
            })
    }
    render() {
        this.state.totaldata.map(function(name){
            var arr = name.src;
            var arr1 = name.name;
            var arr2 = name.title;
            var arr3 = name.new;
            var arr4 = name.herf;
            
            fetch('http://localhost:9000/message',{
                method:'POST',
                body:JSON.stringify({img:arr,name:arr1,writer:arr2,message:arr3,herf:arr4}),
                headers:{"Content-Type":"application/json"}
            }).then(res => res.text())
            .then(res =>{
                console.log('success')
            })
        },this)
        return (
            <div>
            <div className="header1">
                <div className="fanhui">
                <img src={require('../images/3.png')} alt="" onClick={this.onclick}/>
                </div>
                <span>哲学</span> 
                </div>
                <div className="content">
                    <ul>
                    {
                    this.state.totaldata.map(function(name){
                        return(
                        <li key={name.id}>
                            <Link to={{pathname:'/shouye/fenlei/zhexue/xiangqing',state:{name:name.herf}} }>
                            <div className="tuijiantushu"  style={{marginTop:"20px",height:'160px'}}>
                                <div style={{width:'110px',height:'150px',borderRadius:'4px',float:'left'}}>
                                    <img src={'https://images.weserv.nl/?url='+name.src} style={{width:110,height:140,}}/></div>
                                <div style={{paddingLeft:'6px',width:'220px',float:'left',marginTop:'10px'}}>
                                    <span style={{fontSize:'15px',color:'gray'}}>{name.name.replace(/\s*/g,"")}</span><br/>
                                    <span style={{fontSize:'13px'}}> {name.title.replace(/\s*/g,"")}  </span><br/>
                                    <span style={{fontSize:'13px',color:'gray'}}>{name.new} </span>
                                </div>
                                
                                
                            </div>
                            </Link>
                            <hr style={{}}/>
                        </li>)
                    },this)
                    }
                    </ul>
                    <div style={{width:'40%',float:'left',marginLeft:'20px',textAlign:'center',height:'40px'}} onClick={this.onclick2}>
                        <p style={{marginTop:'11px',fontColor:'blue'}}>上一页</p>
                    </div>
                    <div  style={{width:'40%',float:'left',marginLeft:'30px'}}  onClick={this.onclick3}>
                        <p style={{marginTop:'11px',fontColor:'blue'}}>下一页</p>
                    </div>
                </div>
            </div>
        )
    }
}
