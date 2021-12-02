import { combineReducers } from 'redux'
import demo from '@/modules/TestDemo/store'
import home from '@/modules/HomeDemo/store'
import user from '@/modules/UserAccount/store'

const reducersModules = {
  demo,
  home,
  user
}

export type IReducersModules = typeof reducersModules

export default combineReducers(reducersModules)
