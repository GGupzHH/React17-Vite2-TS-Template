import {
  login
} from '@/modules/UserAccount/api'

import ACTIONS from './ACTIONS_TYPE'
import { ITestDemoAction } from './ACTIONS_TYPE'

// export type IActions = typeof actions

export type ITestDemoState = typeof initialState

type IActionsParams = Partial<ITestDemoState>

type IReducersActionsParams = {
  type: ITestDemoAction
  data: ITestDemoState
}

const initialState = {
  demoInfo: {
    mysqlVersion: '1234',
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
  setUser(data: IActionsParams) {
    console.log('setUser')

    return {
      type: ACTIONS.DEMO_INFO,
      data
    }
  }
}

export default function reducers (state = initialState, actions: IReducersActionsParams): ITestDemoState {
  switch (actions.type) {
    case ACTIONS.DEMO_INFO:
        console.log('LOGIN reduces')
        actions.data.demoInfo.mysqlVersion = '' + Math.random()
        console.log(state)
        console.log(actions.data)
        console.log(Object.assign({}, state, actions.data))
        // 这里去改值
        return Object.assign({}, state, actions.data)
    default:
      return state
  }
}
