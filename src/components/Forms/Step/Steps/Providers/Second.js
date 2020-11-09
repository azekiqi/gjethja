import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "../Steps.scss";
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    DatePicker,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';

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
        this.state = {}
    }


    render() {
        return (
            <Form
                {...formItemLayout}
                // form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '86',
                }}
                scrollToFirstError
            >

                <Form.Item
                    name="gender"
                    label="Gjinia"
                    rules={[
                        {required: true}
                    ]}>
                    <Select
                        placeholder="Përzgjedh gjininë"
                        onChange={this.onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Numri i telefonit"
                    rules={[
                        {
                            required: true,
                            message: 'Ju lutem shënoni numrin e juaj të telefonit!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="city"
                    label="Qyteti"
                    rules={[
                        {
                            required: true,
                            message: 'Ju lutem përzgjedheni qytetin!',
                        }
                        ]}
                >
                    <Select
                        placeholder="Përzgjedh qytetin"
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
                    name={['user', 'address']}
                    label="Adresa"
                    rules={[
                        {
                            required: true,
                            message: 'Ju lutem shënoni adresën e juaj!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="education"
                    label="Edukimi"
                    rules={[
                        {
                            required: true,
                            message: 'Ju lutem zgjedh edukimin e juaj!',
                         }
                    ]}
                >
                    <Select
                        placeholder="Përzgjedh edukimin"
                        onChange={this.onEducationChange}
                        allowClear
                    >
                        <Option value="ulet">I ulët</Option>
                        <Option value="mesem">I mesëm</Option>
                        <Option value="larte">I lartë</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={['user', 'introduction']}
                    label="Biografia"
                    rules={[
                        {
                            required: true,
                            message: 'Ju lutem shënoni biografinë e juaj!',
                        },
                    ]}>
                    <Input.TextArea/>
                </Form.Item>
            </Form>
        );
    };
}


export default Second;