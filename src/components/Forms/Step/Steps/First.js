import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "./Steps.scss";
import {Form, Input, Select, DatePicker, Button, AutoComplete,} from 'antd';
import formConfig from "../../Login/Config";

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

    class First extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                dateOfBirth: "",
            }
        }

        firstNamehandler = event => {
            this.setState({
                firstName: event.target.value
            })
        }

        lastNamehandler = event => {
            this.setState({
                lastName: event.target.value
            })
        }

        emailhandler = event => {
            this.setState({
                email: event.target.value
            })
        }

        passwordhandler = event => {
            this.setState({
                password: event.target.value
            })
        }

        // dateOfBirthhandler = event => {
        //     this.setState({
        //         dateOfBirth: event.target.value
        //     })
        // }

        passwordMatchValidation = (password, password_confirmation) => {
            if (!password || password_confirmation === password) {
                return Promise.resolve();
            }

            return Promise.reject('Ju lutem konfirmoni fjalëkalimin e juaj!');
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
                    onFinish={() => this.props.handleSubmit()}
                    scrollToFirstError
                >
                    <p className="register-title"> Regjistrohu!</p>

                    <Form.Item
                        name={formConfig.firstName.name}
                        label={formConfig.firstName.label}
                        rules={formConfig.firstName.rules}>
                        <Input
                            value={this.state.firstName}
                            onChange={this.firstNamehandler}
                            placeholder={formConfig.firstName.placeholder}/>
                    </Form.Item>

                    <Form.Item
                        name={formConfig.lastName.name}
                        label={formConfig.lastName.label}
                        rules={formConfig.lastName.rules}>
                        <Input
                            value={this.state.lastName}
                            onChange={this.lastNamehandler}
                            placeholder={formConfig.lastName.placeholder}/>
                    </Form.Item>

                    <Form.Item
                        name={formConfig.email.name}
                        label={formConfig.email.label}
                        rules={[formConfig.email.rules[0],
                            {
                                type: 'email',
                                message: 'Email-i juaj nuk është valid',
                            }
                        ]}>
                        <Input
                            value={this.state.email}
                            onChange={this.emailhandler}
                            placeholder={formConfig.email.placeholder} />
                    </Form.Item>

                    <Form.Item
                        name={formConfig.password.name}
                        label={formConfig.password.label}
                        rules={formConfig.password.rules}
                        hasFeedback
                    >
                        <Input.Password
                            value={this.state.password}
                            onChange={this.passwordhandler}
                            placeholder={formConfig.password.placeholder}/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Konfirmo Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[formConfig.password.rules[0],
                            ({getFieldValue}) => ({
                                validator: (rule, value) => this.passwordMatchValidation(value, getFieldValue('password')),
                            }),
                        ]}>
                        <Input.Password
                            value={this.state.password}
                            onChange={this.passwordhandler}
                            placeholder={formConfig.password.placeholder}/>
                    </Form.Item>

                    <Form.Item
                        name={formConfig.dateOfBirth.name}
                        label={formConfig.dateOfBirth.label}
                        rules={formConfig.dateOfBirth.rules}>
                        <DatePicker
                            value={this.state.dateOfBirth}
                            // onChange={this.dateOfBirthhandler}
                            placeholder={formConfig.dateOfBirth.placeholder}/>
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


export default First;