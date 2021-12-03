
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useRouteMatch, Redirect } from 'react-router-dom'
import { actions } from '@/modules/HomeDemo/store'

import IconFont from '@/components/IconFont'

import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

import { IReducersModules } from '@/store/reducers'

import { useAppState } from '@/store'

function TestDemo () {
  
  const location = useLocation()
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const homeState = useAppState(({ home }) => {
    return home
  })
  console.log(match)
  if (location.pathname === match.path) {
    return (
      <Redirect to='/test/a'/>
    )
  }

  const handleClick = async (event: any) => {
    const res = await dispatch(actions.setHomeInfo({}))
    console.log(res)
  }

  const handleClickParent = () => {
    console.log('父组件点击事件触发 子传父 给子组件传一个回调 父组件执行 就能获取到子组件传入的数据')
  }

  return (
    <div>
      <div>
        icon
        <IconFont icon='icon-export' disabled handleClick={handleClickParent}/>
      </div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      header 嵌套路由-父路由
      <p onClick={handleClick}>
        dispatch 异步 home-type{ homeState.homeInfo.type }
      </p>
      {/* { props.children } */}
      footer
    </div>
  )
}

export default TestDemo
