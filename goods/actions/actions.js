/**
 * Created by Administrator on 2017/9/28
 */

import { ADD_GOODS, DELETE_GOODS, MODIFY_GOODS, SEARCH_GOODS, SET_KINDS_GOODS } from '../constants';

export function addGoods (data){
    return {
        type : ADD_GOODS,
        data
    }
}

export function deleteGoods (key){
    return {
        type : DELETE_GOODS,
        key
    }
}

export function modifyGoods (key,kind,data){
    return {
        type : MODIFY_GOODS,
        index,
        kind,
        data
    }
}

export function searchGoods (text){
    return {
        type : SEARCH_GOODS,
        text
    }
}

export function setKindsGoods (kind){
    return {
        type : SET_KINDS_GOODS,
        kind
    }
}
