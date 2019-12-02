import React, { Component } from 'react'

export default class Csxq extends Component {
    render() {
        return (
            <div className="csxqimg">
                <div className="recommInput">
                <input type="text" />
                <button>搜索</button>
                </div> 
                <h2>某某丛书 某某出版社</h2>
                <div className="cbsxq">
                    <p style={{fontSize:'20px'}}>丛书详情及出版社详情</p>
                </div>
                <div className="tushuxx" style={{borderTop:'1px solid black'}}>
                    <img src={require('../img/shu.png')} alt=""/>
                    <div className="csxx">
                    <h4>书名作者</h4>
                    <p>标签</p>
                    <button>想看</button>
                    </div>
                </div>
                <div className="tushuxx">
                    <img src={require('../img/                                 shu.png')} alt=""/>
                    <div className="csxx">
                    <h4>书名作者</h4>
                    <p>标签</p>
                    <button>想看</button>
                    </div>           
                </div>
                <div className="tushuxx">
                    <img src={require('../img/shu.png')} alt=""/>
                    <div className="csxx">
                    <h4>书名作者</h4>
                    <p>标签</p>
                    <button>想看</button>
                    </div>
                </div>                
                <div className="tushuxx">
                    <img src={require('../img/shu.png')} alt=""/>
                    <div className="csxx">
                    <h4>书名作者</h4>
                    <p>标签</p>
                    <button>想看</button>
                    </div>
                </div>
                <div className="tushuxx">
                    <img src={require('../img/shu.png')} alt=""/>
                    <div className="csxx">
                    <h4>书名作者</h4>
                    <p>标签</p>
                    <button>想看</button>
                    </div>
                </div>
            </div>
        )
    }
}
