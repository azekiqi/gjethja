import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "../Steps.scss";
import {Form, Input, Tooltip, Cascader, Select, Row, DatePicker, Col, Checkbox, Button, AutoComplete} from 'antd';
import formConfig from "../../../Login/Config";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};


class Second extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "",
            phone: "",
            city: "",
            address: "",
        }
    }

    phonehandler = event => {
        this.setState({
            phone: event.target.value
        })
    }

    addresshandler = event => {
        this.setState({
            address: event.target.value
        })
    }



    render() {
        return (
            <Form
                {...formItemLayout}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '86',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name={formConfig.gender.name}
                    label={formConfig.gender.label}
                    rules={formConfig.gender.rules}>
                    <Select
                        placeholder={formConfig.gender.placeholder}
                        onChange={this.onGenderChange}
                        allowClear
                    >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={formConfig.phone.name}
                    label={formConfig.phone.label}
                    rules={formConfig.phone.rules}>
                    <Input
                        value={this.state.phone}
                        onChange={this.phonehandler}
                        placeholder={formConfig.phone.placeholder}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name={formConfig.city.name}
                    label={formConfig.city.label}
                    rules={formConfig.city.rules}>
                    <Select
                        placeholder={formConfig.city.placeholder}
                        onChange={this.onCityChange}
                        allowClear
                    >
                        <Option value="Prishtine">Prishtinë</Option>
                        <Option value="Peje">Pejë</Option>
                        <Option value="Prizren">Prizren</Option>
                        <Option value="Ferizaj">Ferizaj</Option>
                        <Option value="Gjakove">Gjakove</Option>
                        <Option value="Mitrovice">Mitrovice</Option>
                        <Option value="Peje">Peje</Option>
                        <Option value="Gjilan">Gjilan</Option>
                        <Option value="Vushtrri">Vushtrri</Option>
                    </Select>
                </Form.Item>


                <Form.Item
                    name={formConfig.address.name}
                    label={formConfig.address.label}
                    rules={formConfig.address.rules}>
                    <Input
                        value={this.state.address}
                        onChange={this.addresshandler}
                        placeholder={formConfig.address.placeholder}/>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                        },
                    ]}

                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary"
                            htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    };
}


export default Second;