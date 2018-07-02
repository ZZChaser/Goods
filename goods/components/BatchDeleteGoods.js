/**
 * Created by Administrator on 2017/9/29
 */
import React from 'react';
import {Button, Icon} from 'antd';

export default class Main extends React.Component{
    render = () => {
        return (
            <Button size="large" style={{marginLeft : '20px'}} icon="minus-circle-o" type='ghost' onClick={this.props.onClick}>批量删除</Button>
        )
    }
}