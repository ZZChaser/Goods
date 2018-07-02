/**
 * Created by Administrator on 2017/9/30
 */
import React, {Component} from 'react';

export default class GoodsDetail extends Component{

    constructor(props){
        super(props);
    }




    render = () => {


        console.log(this.props.params.id)
        return (
            <div>
                GoodsDetail
            </div>
        )
    }
}