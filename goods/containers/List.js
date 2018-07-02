/**
 * Created by Administrator on 2017/9/28
 */
import React from 'react';
import {connect} from 'react-redux';
import { addGoods, deleteGoods,modifyGoods, setKindsGoods, searchGoods} from '../actions/actions';
import { KINDS_GOODS } from '../constants';
import Table from '../components/Table';
import SelectGoods from '../components/SelectGoods';
import AddGoodsModel from '../components/AddGoodsModel';
import BatchDeleteGoods from '../components/BatchDeleteGoods';
import SearchGoods from '../components/SearchGoods';

class Main extends React.Component{
    render = () => {
        const {dispatch, goodsData, kind} = this.props;
        return (
            <div>
                <div style={{display : "block",height: '50px',padding : '0 20px',marginTop : '40px'}}>
                    <AddGoodsModel
                        type="add"
                        title='添加商品'
                        data={""}
                        icon='plus-circle-o'
                        addGoods={data => {
                            dispatch(addGoods(data));}
                        }
                    />
                    <BatchDeleteGoods

                    />
                    <SearchGoods
                        searchGoods={
                            (text) => {dispatch(searchGoods(text))}
                        }
                    />
                    <SelectGoods
                        kind={kind}
                        setTypesGoods={kind => {
                            dispatch(setKindsGoods(kind))}
                        }
                    />
                </div>
                <Table
                    kind={kind}
                    data={goodsData}
                    deleteGoods={
                        (index,kind) => {dispatch(deleteGoods(index,kind))}
                    }
                    modifyGoods={
                        (index,kind,dataM) => {
                            dispatch(modifyGoods(index,kind,dataM))}
                    }
                />
            </div>
        )
    }
}

function selectData (data,kind) {
    switch (kind){
        case KINDS_GOODS.ALL :
            return data;
        case KINDS_GOODS.DRINKS:
            return data.filter((item)=>item.kind === "DRINKS");
        case KINDS_GOODS.FRUITS:
            return data.filter((item)=>item.kind === "FRUITS");
        case KINDS_GOODS.SNACKS:
            return data.filter((item)=>item.kind === "SNACKS");
    }
}

function select (state) {
    return {
        goodsData : selectData(state.selectedGoods,state.selectKind),
        selectKind : state.selectKind
    }
}

export default connect(select)(Main)