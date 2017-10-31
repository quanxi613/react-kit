import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'

//import App from './App'
import Page from './components/Page'
import Login from './scenes/Login'
import Home from './scenes/Home'
import PrivateRoute from './PrivateRoute'
import HeaderCustom from './components/Header'
import SiderCustom from './components/Sider'
import Main from './components/Main'

class BasicRoutes extends Component {
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
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<PrivateRoute>
						<Layout>
							<HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
							<Layout className="ant-layout-has-sider">
								<SiderCustom collapsed={this.state.collapsed} />
								<Layout style={{ padding: '0 24px 24px' }}>
									<Main>
										<Switch>
											<Route path="/home" component={Home}  />
										</Switch>
									</Main>
								</Layout>
							</Layout>
						</Layout>

						
					</PrivateRoute>
				</Switch>
			</Router>
		)
	}
}

export default BasicRoutes