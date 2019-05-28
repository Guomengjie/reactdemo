import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas.js'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducer,applyMiddleware(thunk));

// sagaMiddleware.run(mySaga)

export default store;