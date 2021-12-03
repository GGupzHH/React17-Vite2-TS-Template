import { combineReducers } from 'redux'
import demo, { ITestDemoState } from '@/modules/TestDemo/store'
import home, { IHomeDemoState } from '@/modules/HomeDemo/store'
import user, { IUserAccountState } from '@/modules/UserAccount/store'

const reducersModules = {
  demo,
  home,
  user
}

export type IReducersModules = typeof reducersModules

export type IRootState = {
  demo: ITestDemoState
  home: IHomeDemoState
  user: IUserAccountState
}

export default combineReducers(reducersModules)
