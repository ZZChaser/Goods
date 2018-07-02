/**
 * Created by Administrator on 2017/9/28
 */
import React from 'react';
import { Table } from 'antd';
import DeleteGoods from './DeleteGoods';
import AddGoodsModel from './AddGoodsModel';
import { Link } from 'react-router';

export default class Main extends React.Component{

    constructor(props){
        super(props);
    }

    render = () => {

        const dataSource = this.props.data.map((item,index)=>{
            // item.index002 = index;
            // console.log(item);
            return item;
        });

        const pagination = {
            total: dataSource.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
            },
        };

        const columns = [{
            title: '名称',
            dataIndex: 'name',
            render: text => <Link to={`/detail/${2}`}>{text}</Link>,
        }, {
            title: '价格',
            dataIndex: 'price',
        },{
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <div>
                    <AddGoodsModel kind={this.props.kind} type="edit" title='编辑商品' data={record} icon="book" modifyGoods={(index,kind,dataM)=>this.props.modifyGoods(record.key,kind,dataM) } />
                    <DeleteGoods style={{marginLeft:"20px"}} onClick={()=>{this.deleteGoods(record)}} />
                </div>
            )
        }];
        // 通过 rowSelection 对象表明需要行选择
        const rowSelection = {
            onChange(selectedRowKeys, selectedRows) {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll(selected, selectedRows, changeRows) {
                console.log(selected, selectedRows, changeRows);
            },
        };

        return (
            <div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={pagination}
                />
            </div>
        )
    }

    deleteGoods = record => {
        const index = record.index002;
        this.props.deleteGoods(index,this.props.kind);
    }
    // modifyGoods(record,dataM){
    //     console.log('table');
    //     console.log(dataM);
    //     const index = record.index002;
    //     this.props.modifyGoods(index,this.props.kind,dataM);
    // }

}