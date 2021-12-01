import createActionsType from '@/utils/createActionsType'

export const moduleName = 'HOME'

const ACTIONS_TYPE = {
  HOME_INFO: 'homeInfo'
}

// export type IAction = typeof ACTIONS_TYPE

export default createActionsType(moduleName, ACTIONS_TYPE)
