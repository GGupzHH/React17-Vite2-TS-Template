import {
  login
} from '@/modules/UserAccount/api'

import ACTIONS from './ACTIONS_TYPE'

import { Dispatch, AnyAction } from 'redux'


const initialState = {
  userInfo: {
    name: '',
  }
}

export type IUserAccountState = typeof initialState

type IActionsParams = Partial<IUserAccountState>

export const actions = {
  setUserInfo (info: IActionsParams) {
    return {
      type: ACTIONS.USERINFO,
      info
    }
  },
  asyncSetUserInfo (homeInfo: IActionsParams) {
    console.log('homeInfo')
    // 异步更新数据需要返回函数  函数的返回结果会返回给模板
    return async (dispatch: Dispatch) => {
      await login(homeInfo)
      // 这里可以获取所有的state
      // 数据更新继续使用dispatch
      dispatch(this.setUserInfo({
        userInfo: {
          name: '张三'
        }
      }))
      console.log('设置token')
      return {
        error: 0,
        data: {},
        msg: 1233
      }
    }
  }
}

export default function reducers (state = initialState, actions: AnyAction): IUserAccountState {
  switch (actions.type) {
    case ACTIONS.USERINFO:
      return {
        ...state,
        userInfo: actions.info
      }
    default:
      return state
  }
}
