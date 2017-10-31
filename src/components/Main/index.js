import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'

const { Content } = Layout;

class Main extends Component {
	render() {
		return (
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
				{this.props.children}
			</Content>
		);
	}
}
  
export default Main;
  