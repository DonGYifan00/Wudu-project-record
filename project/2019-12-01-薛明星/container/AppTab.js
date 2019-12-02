import React from 'react';
import { TabBar, NavBar, Icon } from 'antd-mobile';
import Header from './Header';
import Grate from './Grate';
import Store from './Store';
import My from './My';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'greenTab',
    };
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
            icon={<i class='iconfont icon-shouye'/>}
            selectedIcon={<div className='iconfont icon-shouye' style={{color:'#3fcccb'}}/>}
            selected={this.state.selectedTab == 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}>
            <Header/>
          </TabBar.Item>
          <TabBar.Item
            title="分类"
            key="fenlei"
            icon={<i class='iconfont icon-linggan'/>}
            selectedIcon={<div className='iconfont icon-linggan' style={{color:'#3fcccb'}}/>}
            selected={this.state.selectedTab == 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}>
            <Grate/>
          </TabBar.Item>
          <TabBar.Item
            title="推荐"
            key="store"
            icon={<i class='iconfont icon-linggan'/>}
            selectedIcon={<div class='iconfont icon-linggan' style={{color:'#3fcccb'}}/>}
            selected={this.state.selectedTab == 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}>
            <Store/>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="my"
            icon={<i class='iconfont icon-wode'/>}
            selectedIcon={<div className='iconfont icon-wode' style={{color:'#3fcccb'}}/>}
            selected={this.state.selectedTab == 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}>
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}