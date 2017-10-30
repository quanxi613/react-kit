import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import './App.css'
import HeaderCustom from './components/Header'
import SiderCustom from './components/Sider'

const { Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Layout>
        <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
        <Layout className="ant-layout-has-sider">
          <SiderCustom collapsed={this.state.collapsed} />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
