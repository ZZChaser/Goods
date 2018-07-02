/**
 * Created by Administrator on 2017/9/29
 */
import React from 'react';
import { Form, Input, Button, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

let Demo = React.createClass({

    handleSubmit(e) {
        e.preventDefault();
        const dataM = this.props.form.getFieldsValue();
        if(this.props.type == 'add'){
            this.props.addGoods(dataM);
        }else{
            this.props.modifyGoods(index,this.props.kind,dataM);
        }
        this.props.form.resetFields();
    },

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    label="商品名称"
                >
                    <Input type='text' placeholder="请输入商品名称"
                           {...getFieldProps('name', { initialValue: this.props.data.name})}
                    />
                </FormItem>
                <FormItem
                    label="商品价格"
                >
                    <Input type='text' placeholder="请输入商品价格"
                           {...getFieldProps('price', { initialValue: this.props.data.price})}
                    />
                </FormItem>
                <FormItem
                    label="商品类型"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <RadioGroup {...getFieldProps('kind', { initialValue: this.props.data.kind})}>
                        <Radio value="FRUITS">水果</Radio>
                        <Radio value="SNACKS">零食</Radio>
                        <Radio value="DRINKS">领料</Radio>
                    </RadioGroup>
                </FormItem>

                <Button type="primary" htmlType="submit">提交</Button>
            </Form>
        );
    },
});

Demo = Form.create()(Demo);

export default Demo;