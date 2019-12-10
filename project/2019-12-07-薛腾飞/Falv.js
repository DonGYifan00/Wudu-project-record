import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './tuijiananniu.css'
export default class Falv extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: [] };
      }
    
    
    componentDidMount() {
        fetch("http://localhost:9000/index",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:encodeURI('法律')}), // data can be `string` or {object}!
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
    onclick1=()=>{
        this.props.history.go(-1);
    }
    // onclick2=(str)=>{
    //     fetch("http://localhost:9000/texts",{
    //         method: 'POST', // or 'PUT'
    //         body:JSON.stringify({name:str}), // data can be `string` or {object}!
    //         headers: 
    //         {"Content-Type": "application/json"}
    //         }).then(res => res.text())
    //         .then(res => {
    //             console.log('加载成功',res)
    //         })
    //     }
    render() {
        return (
            <div>
                <div className="header1">
                    <div className="fanhui">
                        <img src={require('../images/3.png')} alt="" onClick={this.onclick1}/>
                    </div>
                    <span>法律</span> 
                </div>
                <div className="content">
                    <ul>
                    {
                    this.state.totaldata.map(function(name){
                        return(
                        <li key={name.id}>
                            <Link to={{pathname:'/falvsanji',state:{name:name.herf}} }>
                            <div className="tuijiantushu"  style={{marginTop:"20px",height:'160px'}}>
                                <div style={{width:'110px',height:'150px',borderRadius:'4px',float:'left'}}>
                                    <img src={'https://images.weserv.nl/?url='+name.src} style={{width:110,height:140,}}/></div>
                                <div style={{paddingLeft:'6px',width:'220px',float:'left',marginTop:'10px'}}>
                                    <span style={{fontSize:'18px',color:'gray'}}>{name.name.replace(/\s*/g,"")}</span><br/>
                                    <span style={{fontSize:'13px'}}> {name.title.replace(/\s*/g,"")}  </span><br/>
                                    <span style={{fontSize:'13px',color:'gray'}}>{name.new} </span>
                                    <span> {name.herf} </span>
                                </div>
                                
                                
                            </div>
                            </Link>
                            <hr style={{}}/>
                        </li>)
                    },this)
                    }
                    </ul>
                </div>
            </div>
            
        )
    }
    // render() {
    //     return (
    //         <div>
    //             <div className="header1">
    //                 <div className="fanhui">
    //                     <img src={require('../images/3.png')} alt="" onClick={this.onclick1}/>
    //                 </div>
    //                 <span>法律</span> 
    //             </div>
    //             <div className="content">
    //                 <ul>
    //                 {
    //                 this.state.totaldata.map(function(name){
    //                     return(
    //                     <li key={name.id}>
    //                         <Link to='/falvsanji'>
    //                         <div className="tuijiantushu" onClick={()=>this.onclick2(name.herf)} style={{marginTop:"20px",height:'160px'}}>
    //                             <div style={{width:'110px',height:'150px',borderRadius:'4px',float:'left'}}>
    //                                 <img src={'https://images.weserv.nl/?url='+name.src} style={{width:110,height:140,}}/></div>
    //                             <div style={{paddingLeft:'6px',width:'220px',float:'left',marginTop:'10px'}}>
    //                                 <span style={{fontSize:'18px',color:'gray'}}>{name.name.replace(/\s*/g,"")}</span><br/>
    //                                 <span style={{fontSize:'13px'}}> {name.title.replace(/\s*/g,"")}  </span><br/>
    //                                 <span style={{fontSize:'13px',color:'gray'}}>{name.new} </span>
    //                                 <span> {name.herf} </span>
    //                             </div>
                                
                                
    //                         </div>
    //                         </Link>
    //                         <hr style={{}}/>
    //                     </li>)
    //                 })
    //                 }
    //                 </ul>
    //             </div>
    //         </div>
            
    //     )
    // }
}
