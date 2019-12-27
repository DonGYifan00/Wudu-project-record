import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import { TabBar, NavBar, Icon } from 'antd-mobile';
import My from './My'
import Header from './Header'
import Storesy from './Storesy'
import Fenlei from './Fenlei'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ position:'fixed',height:'100%',width:'100%',top:0}}>
        <TabBar
          unselectedTintColor="white"
          tintColor="red"
          barTintColor="gray"
          backgroundColor='red'>
          <TabBar.Item style={{color:'#3fcccb',"height":"100px"}}
            title="首页"
            key="shouye"
            icon={<i className='iconfont icon-shouye'/>}
            selectedIcon={<div className='iconfont icon-shouye' style={{color:'#3fcccb'}}/>}
            selected={window.location.pathname == "/shouye"}
            onPress={() => {
              this.props.history.push("/shouye");
            }}>
            <Header/>
          </TabBar.Item>
          <TabBar.Item
            title="推荐"
            key="fenlei"
            icon={<i className='iconfont icon-linggan'/>}
            selectedIcon={<div className='iconfont icon-linggan' style={{color:'#3fcccb'}}/>}
            selected={window.location.pathname == "/shouye/tuijian"}
            onPress={() => {
              this.props.history.push("/shouye/tuijian");
            }}>
            <Fenlei/>
          </TabBar.Item>
          <TabBar.Item
            title="分类"
            key="store"
            icon={<i className='iconfont icon-linggan'/>}
            selectedIcon={<div className='iconfont icon-linggan' style={{color:'#3fcccb'}}/>}
            selected={window.location.pathname == "/shouye/fenlei"}
            onPress={() => {
              this.props.history.push("/shouye/fenlei");
            }}>
           <Storesy/>
          </TabBar.Item>
          <TabBar.Item  
            title="我的"
            key="my"
            icon={<i className='iconfont icon-wode'/>}
            selectedIcon={<div className='iconfont icon-wode' style={{color:'#3fcccb'}}/>}
            selected={window.location.pathname == "/shouye/my"}
            onPress={() => {
              this.props.history.push("/shouye/my");
            }}>
              <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}