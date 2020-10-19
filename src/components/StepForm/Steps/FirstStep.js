import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "./Steps.scss";
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


    class FirstStep extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }


        render() {
            return (
                <Form
                    classname="step-form"
                    {...formItemLayout}
                    // form={form}
                    name="register"
                    initialValues={{
                        prefix: '86',
                    }}
                    scrollToFirstError
                >
                    <p className="register-title"> Regjistrohu!</p>

                    <Form.Item
                        name={['user', 'name']}
                        label="Emri"
                        rules={[
                            {
                                required: true,
                                message: 'Ju lutem shënoni emrin e juaj!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={['user', 'lastname']}
                        label="Mbiemri"
                        rules={[
                            {
                                required: true,
                                message: 'Ju lutem shënoni mbiemrin e juaj!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'Email-i juaj nuk është valid',
                            },
                            {
                                required: true,
                                message: 'Ju lutem shënoni email e juaj!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Ju lutem shënoni fjalëkalimin e juaj!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Konfirmo Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="date"
                        label="Data e lindjes"
                        rules={[
                            {
                                required: true,
                                message: 'Ju lutem vendosni datën e lindjes!',
                            },
                        ]}>
                        <DatePicker/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary"
                                htmlType="submit"
                                onClick={() => this.props.handleSubmit()}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            );
        };
    }


export default FirstStep;