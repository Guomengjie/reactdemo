import axios from 'axios'
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

export const getHeaderList = () => {
    return (dispatch) => {
        axios.get('/api/data.json').then(res=>{
            dispatch({
                type:actionTypes.GET_HEADER_LIST,
                list:fromJS(res),
            });
        })

    }
}