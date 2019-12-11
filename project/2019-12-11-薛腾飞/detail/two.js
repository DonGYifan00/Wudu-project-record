import React, { Component } from 'react'
import Express from '../express/express'
export default class Detailbooks extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: [] };
      }
    
    componentDidMount() {
          fetch("http://localhost:9000/index",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:encodeURI('经典')}), // data can be `string` or {object}!
            headers: 
              {"Content-Type": "application/json"}
            })
              .then(res => res.text())
              .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
              })
      }
    render() {
        
        
        return (
            <ul>
                {
                    this.state.totaldata.map(function(name){
                        return(
                        <li key={name.id}>
                            <div className="tuijiantushu" style={{marginTop:"20px",height:'160px'}} >
                                <div style={{width:'110px',height:'150px',borderRadius:'4px',float:'left'}}><img src={'https://images.weserv.nl/?url='+name.src} style={{width:110,height:140,}}/></div>
                                
                                <span style={{fontSize:'18px'}}>{name.name.replace(/\s*/g,"")}</span><br/>
                                <span style={{fontSize:'13px'}}> {name.title.replace(/\s*/g,"")}  </span><br/>
                                <span style={{fontSize:'13px'}}>{name.new} </span>
                            </div>
                        </li>)
                    })
                }
            </ul>
        )
    }     
}
