import React, { Component } from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout

class HeaderCustom extends Component {
	render() {
		return (
			<Header className="header">
				<div className="logo" />
				<Icon
					className="trigger"
					type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={this.props.toggle}
				/>
			</Header>
		)
	}
}

export default HeaderCustom