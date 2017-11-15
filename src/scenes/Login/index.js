import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Redirect } from 'react-router-dom'
import './login.css'
const FormItem = Form.Item

class Login extends Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    }
  }
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
    });
    this.fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }
  fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
  }
	render() {
    const { getFieldDecorator } = this.props.form;
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('username', {
					rules: [{ required: true, message: '请输入用户名!' }],
					})(
					<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
					rules: [{ required: true, message: '请输入密码!' }],
					})(
					<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remember', {
					valuePropName: 'checked',
					initialValue: true,
					})(
					<Checkbox>记住我</Checkbox>
					)}
					<a className="login-form-forgot" href="">忘记密码</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
					登录
					</Button>
					Or <a href="">现在注册!</a>
				</FormItem>
			</Form>
		);
	}
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin
