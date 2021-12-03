import rootReducers from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { useSelector, } from 'react-redux'

import { IRootState } from '@/store/reducers'

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)

// export const useAppState = <T extends (state: IRootState) => any>(selector: T): ReturnType<T> => useSelector(selector)
export const useAppState = function<T extends (state: IRootState) => any> (selector: T): ReturnType<T> {
  return useSelector(selector)
}

type aaa = typeof useAppState

type a = ReturnType<aaa>
export default store
