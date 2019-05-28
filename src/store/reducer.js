import {INCREMENT} from './actionTypes'
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../page/header/store'

// export default function counter(state = {num:0}, action) {
//   switch (action.type) {
// //case INCREMENT:
// //  return ({num:1})
//   case 'INCREMENT':
//     return ({num:2})
//   default:
//     return state
//   }
// }

export default combineReducers({
    header:headerReducer,
})