import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/history.css'
export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: [] };
      }
    
    
    componentDidMount() {
        var lastname = localStorage.getItem('username');
        fetch("http://localhost:9000/show",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({user:lastname}), // data can be `string` or {object}!
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
    clear=()=>{
        fetch("http://localhost:9000/clear",{
            method: 'POST', // or 'PUT'
            body:"", // data can be `string` or {object}!
            headers: 
            {"Content-Type": "application/json"}
            })
            .then(res => res.text())
            .then(res => {
                window.location.reload();            })
            
    }
    render() {
        return (
            <div>
                <div className='historydiv1'>
                    <Link to='my'><img src={require("../images/10.png")} className='historyimg1'></img></Link>
                    <p className='historyp1'>浏览历史</p>
                </div>
                <div>
                    <ul>
                    {
                    this.state.totaldata.map(function(name){
                        return(
                        <li key={name.id}>
                            <Link to={{pathname:'/shouye/history/xiangqing',state:{name:name.herf}} }>
                            <div  style={{marginTop:"20px",height:'160px'}}>
                                <div style={{width:'110px',height:'150px',borderRadius:'4px',float:'left'}}>
                                    <img src={'https://images.weserv.nl/?url='+name.img} style={{width:110,height:140,}}/></div>
                                <div style={{paddingLeft:'6px',width:'220px',float:'left',marginTop:'10px'}}>
                                    
                                    <span style={{fontSize:'17px'}}> {name.title.replace(/\s*/g,"")}  </span><br/>
                                    
                                    <span style={{fontSize:'15px'}}>{name.name.replace(/\s*/g,"")} </span>
                                    <span  style={{fontSize:'15px'}}> {name.press.replace(/\s*/g,"")} </span>
                                </div>
                                
                                
                            </div>
                            </Link>
                            <hr style={{}}/>
                        </li>)
                    },this)
                    }
                    </ul>
                </div>
                {/* <div className='historydiv2'>
                    <img src={require("../images/2.jpg")} className='historyimg2'></img>
                    <ul className='historyul1'> 
                        <li><p>作者：薛腾飞</p></li>
                        <li className='historyli1'><p>评分：8.9</p></li>
                        <li className='historyli1'><p>出版社：薛腾飞出版社</p></li>
                    </ul>
                    <img src={require("../images/12.png")} className='historyimg3'></img>
                </div> */}
                <hr/>
                <hr/>
                <div className='historydiv3' onClick={this.clear}>
                    <p className='historyp2'>清&ensp;空&ensp;浏&ensp;览&ensp;历&ensp;史</p>
                </div>
                <div className='historydiv5'></div>
            </div>
        )
    }
}
