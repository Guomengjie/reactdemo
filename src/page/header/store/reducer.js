import {fromJS} from 'immutable';
import * as actionTypes  from './actionTypes'

const defaultState = fromJS({
    headerList:[],
    content:'',
});

export default (state=defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_HEADER_LIST:
            return state.merge({
                headerList:action.list,
            })
    }
    return state;
}



