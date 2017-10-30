import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import App from './App'
import Page from './components/Page'
import Login from './scenes/Login'

const BasicRoutes = () => (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/app" component={Login} />			
		</div>
	</Router>
)

export default BasicRoutes