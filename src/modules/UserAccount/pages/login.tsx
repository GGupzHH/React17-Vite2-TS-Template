import React from 'react'

import { Form, Input, Button } from 'antd'

import '@/modules/UserAccount/style/login.scss'

import Logo from '@/assets/logo.svg'
import ViteLogo from '@/assets/favicon.svg'

// import { ValidateErrorEntity } from 'rc-fidle-form'

// import { FormProps } from 'rc-pagination'

import {
  SmileTwoTone,
  LockOutlined
} from '@ant-design/icons'

import { actions } from '@/modules/UserAccount/store'

import {
  useDispatch,
  useSelector,
} from 'react-redux'

import { IReducersModules } from '@/store/reducers'
import { IUserAccountState } from '@/modules/UserAccount/store'

// import {  } from
function Login<React> () {
  const userStore = useSelector<IReducersModules, IUserAccountState>((reducersModules) => {
    return reducersModules.user
  })
  const dispatch = useDispatch()

  const onFinish = async (values: any) => {
    console.log('Success:', values)
    const res = await dispatch(actions.asyncSetUserInfo({}))
    console.log('Success:', res)
    console.log('Success:', userStore)
    
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="wrap-login">
      <div className="wrap-logo">
        <img src={ Logo } alt="" />
        <img src={ ViteLogo } alt="" />
      </div>
      <Form
        className="wrap-login-form"
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            className="login-input"
            placeholder="Username"
            prefix={ <SmileTwoTone /> }
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            className="login-input"
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
