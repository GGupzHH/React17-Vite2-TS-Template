import { sleep } from '@/utils/request'
import { Dispatch } from 'redux'

import ACTIONS from './ACTIONS_TYPE'
import { IHomeDemoAction } from './ACTIONS_TYPE'

export type IHomeDemoState = typeof initialState

type IActionsParams = Partial<IHomeDemoState>

type IReducersActionsParams = {
  type: IHomeDemoAction
  data: IHomeDemoState
}

const initialState = {
  homeInfo: {
    mysqlVersion: '',
    currentSystemTime: Date.now(),
    freemem: 0,
    totalmem: 0,
    platform: '',
    type: '',
    hostname: '',
    arch: '',
    nodeVersion: '',
    cpus: []
  }
}



export const actions = {
  asyncSetHomeInfor (info: IActionsParams) {
    return {
      type: ACTIONS.HOME_INFO,
      info
    }
  },
  setHomeInfo (homeInfo: IActionsParams) {
    console.log('homeInfo')
    // 异步更新数据需要返回函数  函数的返回结果会返回给模板
    return async (dispatch: Dispatch) => {
      await sleep(1000)
      // 数据更新继续使用dispatch
      dispatch(this.asyncSetHomeInfor({}))
      return {
        error: 0,
        data: {},
        msg: 1233
      }
    }
  }
}

export default function reducers (state = initialState, actions: IReducersActionsParams): IHomeDemoState {
  switch (actions.type) {
    case ACTIONS.HOME_INFO:
      console.log('HOMEINFO reduces', ACTIONS.HOME_INFO)
      return Object.assign({}, state, actions.data)
    default:
      return state
  }
}
