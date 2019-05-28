import { put, takeEvery} from 'redux-saga/effects'
import {INCREMENT} from './actionTypes'
import data from './../api/api.js'


function* fetchUser(action){
	console.log(action)
	const result = yield data('http://localhost:3001/users/kk')
	
	console.log(result)
	yield put({
		type:'INCREMENT',
	})
}


function* mySaga() {
  yield takeEvery(INCREMENT, fetchUser);
}

export default mySaga;