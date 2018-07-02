/**
 * Created by Administrator on 2017/9/28
 */
import { combineReducers } from 'redux';
import { ADD_GOODS, DELETE_GOODS, MODIFY_GOODS, SET_KINDS_GOODS, KINDS_GOODS, SEARCH_GOODS} from '../constants';

const {ALL} = KINDS_GOODS;


const initDate = {
    selectKind : ALL,
    allGoods : [
        {
            name : "苹果",
            price : "10",
            kind : "FRUITS",
            key : 'a1'
        }, {
            name : "香蕉",
            price : "8",
            kind : "FRUITS",
            key : 'b1'

        }, {
            name : "开兴果",
            price : "40",
            kind : "SNACKS",
            key : 'k1'
        }, {
            name : "夏威夷果",
            price : "45",
            kind : "SNACKS",
            key : 'x1'
        }, {
            name : "桃子",
            price : "15",
            kind : "FRUITS",
            key : 't1'
        }, {
            name : "可口可乐",
            price : "3",
            kind : "DRINKS",
            key : 'k2'
        }, {
            name : "阿萨姆",
            price : "4",
            kind : "DRINKS",
            key : 'a2'
        },  {
            name : "大苹果",
            price : "10",
            kind : "FRUITS",
            key : 'ba1'
        }, {
            name : "大香蕉",
            price : "8",
            kind : "FRUITS",
            key : 'bb1'
        }, {
            name : "大开兴果",
            price : "40",
            kind : "SNACKS",
            key : 'bk2'
        }, {
            name : "大夏威夷果",
            price : "45",
            kind : "SNACKS",
            key : 'bx2'
        }, {
            name : "大桃子",
            price : "15",
            kind : "FRUITS",
            key : 'bt2'
        }, {
            name : "大可口可乐",
            price : "3",
            kind : "DRINKS",
            key : 'bkk2'
        }, {
            name : "大阿萨姆",
            price : "4",
            kind : "DRINKS",
            key : 'bas2'
        }
    ]
};

function setKind (state = ALL,action){
    switch (action.type){
        case SET_KINDS_GOODS :
            return action.kind;
        default :
            return state;
    }
}

function selectedGoods (state = [...initDate.allGoods],action){
    switch (action.type){
        case ADD_GOODS :
            return [
                ...state,
                {
                    name : action.data.name,
                    price : action.data.price,
                    kind : action.data.kind
                }
            ];
        case DELETE_GOODS :

            let newState = [...state];

            newState = newState.filter(item => {
                if(action.keys.indexof(item.key)){
                    return false;
                }else{
                    return true;
                }
            });

            return newState;

            // if(action.kind == ALL){
            //     return [
            //         ...state.slice(0, action.index),
            //         ...state.slice(action.index + 1)
            //     ];
            // }
            // const itemDelete = state.filter((item,index)=>{
            //     if(item.kind == action.kind && item.index002 == action.index){
            //         return item;
            //     }
            // });
            // const indexDelete = state.indexOf(itemDelete[0]);
            // return [
            //     ...state.slice(0, indexDelete),
            //     ...state.slice(indexDelete + 1)
            // ];
        case MODIFY_GOODS :
            // if(action.kind == ALL){
            //     return [
            //         ...state.slice(0, action.index),
            //         action.data,
            //         ...state.slice(action.index + 1)
            //     ];
            // }
            // const itemModify = state.filter((item,index)=>{
            //     if(item.kind == action.kind && item.index002 == action.index){
            //         return item;
            //     }
            // });
            // const indexModify = state.indexOf(itemModify[0]);
            console.log(action,'ac')
            return [
                ...state.slice(0, indexModify),
                action.data,
                ...state.slice(indexModify + 1)
            ];
        case SEARCH_GOODS :
            const regexp = new RegExp(action.text);
            const searchData = state.filter((item,index)=>{
                return item.name.match(regexp)
            });
            console.log('action');
            console.log(searchData);
            return searchData;
        default :
            return state;
    }
}

const goodsApp = combineReducers({
    selectKind : setKind,
    selectedGoods
});
export default goodsApp