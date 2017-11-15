import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={props => (
// 		fakeAuth.isAuthenticated ? (
// 			<Component {...props}/>
// 			) : (
// 			<Redirect to={{
// 					pathname: '/login',
// 					state: { from: props.location }
// 			}}/>
// 		)
// 	)}/>
// )

const PrivateRoute = (props) => (
	<Route render={() => (
		<div>{props.children}</div>
	)}/>
)

// const PrivateRoute = (props) => (
// 	<Route render={() => (
// 		fakeAuth.isAuthenticated ? (
//       <div>{props.children}</div>
//       ) : (
//       <Redirect to={{
//           pathname: '/login',
//           state: { from: props.location }
//       }}/>
//     )
// 	)}/>
// )

const fakeAuth = {
  isAuthenticated: true,
}


export default PrivateRoute
