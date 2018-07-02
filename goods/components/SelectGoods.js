/**
 * Created by Administrator on 2017/9/28
 */
import React from 'react';
import {Select} from 'antd';

const Option = Select.Option;
export default class Main extends React.Component{
    handleChange(kind){
        this.props.setTypesGoods(kind);
    }

    render = () => {
        return (
            <Select defaultValue={this.props.kind} style={{ width: 120, float: 'right' }} onChange={this.handleChange.bind(this)}>
                <Option value="ALL">全部商品</Option>
                <Option value="SNACKS">零食</Option>
                <Option value="FRUITS">水果</Option>
                <Option value="DRINKS">饮料</Option>
            </Select>
        )

    }
}
