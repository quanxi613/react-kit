import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { SubMenu } = Menu
const { Sider } = Layout

class SiderCustom extends Component {
	render() {
		return (
			<Sider
				style={{ background: '#fff' }}
				trigger={null}
				collapsible
				collapsed={this.props.collapsed}
			>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<Menu.SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
						<Menu.Item key="1">option1</Menu.Item>
						<Menu.Item key="2">option2</Menu.Item>
						<Menu.Item key="3">option3</Menu.Item>
						<Menu.Item key="4">option4</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu key="sub2" title={<span><Icon type="laptop" /><span>subnav 2</span></span>}>
						<Menu.Item key="5">option5</Menu.Item>
						<Menu.Item key="6">option6</Menu.Item>
						<Menu.Item key="7">option7</Menu.Item>
						<Menu.SubMenu key="sub3" title="Submenu">
							<Menu.Item key="2-1">Option 2-1</Menu.Item>
							<Menu.Item key="2-2">Option 2-2</Menu.Item>
						</Menu.SubMenu>
					</Menu.SubMenu>
					<Menu.SubMenu key="sub4" title={<span><Icon type="notification" /><span>subnav 3</span></span>}>
						<Menu.Item key="9">option9</Menu.Item>
						<Menu.Item key="10">option10</Menu.Item>
						<Menu.Item key="11">option11</Menu.Item>
						<Menu.Item key="12">option12</Menu.Item>
					</Menu.SubMenu>
				</Menu>
			</Sider>
		)
  }
}

export default SiderCustom
