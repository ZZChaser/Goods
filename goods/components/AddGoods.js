/**
 * Created by Administrator on 2017/9/28
 */
import React from 'react';
import {Button,Icon} from 'antd';

export default class Main extends React.Component{
    render = () => {
        return (
            <div>
                <Button type='ghost' size='large' icon='plus-circle-o' onClick={this.props.onClick}>
                </Button>
            </div>
            )
    }
}