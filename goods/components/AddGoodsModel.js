/**
 * Created by Administrator on 2017/9/29
 */
import React from 'react';
import { Modal, Button } from 'antd';
import GoodsForm from './GoodsForm';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            visible: false,
        }
    }
    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleCancel() {
        this.setState({ visible: false });

    }
    addGoods(data) {
        this.props.addGoods(data);
        this.setState({ loading: false, visible: false });
    }
    modifyGoods(key,dataM) {
        this.props.modifyGoods(key,dataM);
        this.setState({ loading: false, visible: false });
    }
    render = () => {
        return (
            <div style={{display : 'inline-block',float: 'left' }}>
                <Button type='ghost' size='large' icon={this.props.icon} onClick={()=>this.showModal()}>
                    {this.props.title}
                </Button>
                <Modal ref="modal"
                       visible={this.state.visible}
                       title={this.props.title} onOk={()=>this.handleOk()} onCancel={()=>this.handleCancel()}
                       footer={[
                           <Button key="back" type="ghost" size="large" onClick={()=>this.handleCancel()}>返 回</Button>,

                       ]}
                >
                    <GoodsForm
                        type={this.props.type}
                        data={this.props.data}
                        kind={this.props.kind}
                        modifyGoods={(index,kind,dataM)=>{this.modifyGoods(index,kind,dataM)}}
                        addGoods={data=>{this.addGoods(data)}}/>
                </Modal>
            </div>
        );
    }
}

