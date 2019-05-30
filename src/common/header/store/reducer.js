import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if(action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data).set('totalPage', action.totalPage)
  }
  return state
}