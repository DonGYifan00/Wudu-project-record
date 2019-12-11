import React, { Component } from 'react'
import {BroswerRouter as Router,Route,Link} from 'react-router-dom'
import '../Index/history.css'
export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: [] };
      }
    
    
    componentDidMount() {
        fetch("http://localhost:9000/show",{
            method: 'POST', // or 'PUT'
            body:"", // data can be `string` or {object}!
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
        return (
            <div>
                <div className='historydiv1'>
                    <Link to='my'><img src={require("../images/10.png")} className='historyimg1'></img></Link>
                    <p className='historyp1'>浏览历史</p>
                </div>
                <div className='historydiv2'>
                    <img src={require("../images/2.jpg")} className='historyimg2'></img>
                    <ul className='historyul1'> 
                        <li><p>作者：薛腾飞</p></li>
                        <li className='historyli1'><p>评分：8.9</p></li>
                        <li className='historyli1'><p>出版社：薛腾飞出版社</p></li>
                    </ul>
                    <img src={require("../images/12.png")} className='historyimg3'></img>
                </div>
                <hr/>
                <div className='historydiv2'>
                    <img src={require("../images/3.jpg")} className='historyimg2'></img>
                    <ul className='historyul1'> 
                        <li><p>作者：房世有</p></li>
                        <li className='historyli1'><p>评分：8.9</p></li>
                        <li className='historyli1'><p>房世有：薛腾飞出版社</p></li>
                    </ul>
                    <img src={require("../images/12.png")} className='historyimg3'></img>
                </div>
                <hr/>
                <div className='historydiv2'>
                    <img src={require("../images/4.jpg")} className='historyimg2'></img>
                    <ul className='historyul1'> 
                        <li><p>作者：李继业</p></li>
                        <li className='historyli1'><p>评分：8.9</p></li>
                        <li className='historyli1'><p>出版社：李继业出版社</p></li>
                    </ul>
                    <img src={require("../images/12.png")} className='historyimg3'></img>
                </div>
                <hr/>
                <div className='historydiv2'>
                    <img src={require("../images/5.jpg")} className='historyimg2'></img>
                    <ul className='historyul1'> 
                        <li><p>作者：薛腾飞</p></li>
                        <li className='historyli1'><p>评分：8.9</p></li>
                        <li className='historyli1'><p>出版社：薛腾飞出版社</p></li>
                    </ul>
                    <img src={require("../images/12.png")} className='historyimg3'></img>
                </div>
                <hr/>
                <div className='historydiv2'>
                    <img src={require("../images/6.jpg")} className='historyimg2'></img>
                    <ul className='historyul1'> 
                        <li><p>作者：房世有</p></li>
                        <li className='historyli1'><p>评分：8.9</p></li>
                        <li className='historyli1'><p>出版社：房世有出版社</p></li>
                    </ul>
                    <img src={require("../images/12.png")} className='historyimg3'></img>
                </div>
                <hr/>
                <div className='historydiv4'>
                    <p className='historyp3'>查看全部浏览历史</p>
                    <img src={require("../images/13.png")} className='historyimg4'></img>
                </div>
                <div className='historydiv3'>
                    <p className='historyp2'>清&ensp;空&ensp;浏&ensp;览&ensp;历&ensp;史</p>
                </div>
                <div className='historydiv5'></div>
            </div>
        )
    }
}
