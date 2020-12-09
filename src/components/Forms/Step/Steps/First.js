import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "./Steps.scss";
import {Form, Input, Select, DatePicker, Button, AutoComplete,} from 'antd';
import formConfig from "../../Config";
import moment from "moment";
import {FormInstance} from 'antd/lib/form';


const {Option} = Select;
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

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    formRef = React.createRef();

    componentDidMount() {
        const {data} = this.props;
        this.formRef.current.setFieldsValue({
            [formConfig.firstName.name]: data[formConfig.firstName.name],
            [formConfig.lastName.name]: data[formConfig.lastName.name],
            [formConfig.email.name]: data[formConfig.email.name],
            [formConfig.dateOfBirth.name]: data[formConfig.dateOfBirth.name] ? moment(data[formConfig.dateOfBirth.name]) : ""
        });
    }

    handleChange = (value, name) => {
        console.log(value);
        this.props.handleChange(value, name);
    }

    passwordMatchValidation = (password, password_confirmation) => {
        if (!password || password_confirmation === password) {
            return Promise.resolve();
        }

        return Promise.reject('Ju lutem konfirmoni fjalëkalimin e juaj!');
    }

    disabledDate = (current) => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 18);
        return current && current > moment(date, "dd-MM-yyyy");
    }

    render() {
        const { hasBack } = this.props;
        return (
            <Form
                classname="step-form"
                {...formItemLayout}
                // form={form}
                name="register"
                initialValues={{
                    prefix: '86',
                }}
                ref={this.formRef}
                onFinish={() => this.props.handleSubmit()}
                scrollToFirstError
            >
                <p className="register-title"> Regjistrohu!</p>


                <Form.Item
                    name={formConfig.firstName.name}
                    label={formConfig.firstName.label}
                    rules={formConfig.firstName.rules}>
                    <Input
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.firstName.name)
                        }}
                        placeholder={formConfig.firstName.placeholder}/>
                </Form.Item>


                <Form.Item
                    name={formConfig.lastName.name}
                    label={formConfig.lastName.label}
                    rules={formConfig.lastName.rules}>
                    <Input
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.lastName.name)
                        }}
                        placeholder={formConfig.lastName.placeholder}/>
                </Form.Item>

                <Form.Item
                    name={formConfig.email.name}
                    label={formConfig.email.label}
                    rules={formConfig.email.rules}>
                    <Input
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.email.name)
                        }}
                        placeholder={formConfig.email.placeholder}/>
                </Form.Item>

                <Form.Item
                    name={formConfig.password.name}
                    label={formConfig.password.label}
                    rules={formConfig.password.rules}
                    hasFeedback
                >
                    <Input.Password
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.password.name)
                        }}
                        placeholder={formConfig.password.placeholder}/>
                </Form.Item>

                <Form.Item
                    name={formConfig.confirm_password.name}
                    label={formConfig.confirm_password.label}
                    dependencies={['password']}
                    hasFeedback
                    rules={[formConfig.confirm_password.rules[0],
                        ({getFieldValue}) => ({
                            validator: (rule, value) => this.passwordMatchValidation(value, getFieldValue('password')),
                        }),
                    ]}>
                    <Input.Password
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.confirm_password.name)
                        }}
                        placeholder={formConfig.confirm_password.placeholder}/>
                </Form.Item>

                <Form.Item
                    name={formConfig.dateOfBirth.name}
                    label={formConfig.dateOfBirth.label}
                    rules={formConfig.dateOfBirth.rules}>
                    <DatePicker
                        format = {"DD-MM-yyyy"}
                        disabledDate={this.disabledDate}
                        onChange={(date, dateString) => {
                            this.handleChange(dateString, formConfig.dateOfBirth.name)
                        }}
                        placeholder={formConfig.dateOfBirth.placeholder}/>
                </Form.Item>

                <div className="step-buttons">
                    {hasBack &&
                    <Button className="step-submit-button"
                            type="primary"
                            onClick={() => this.props.handleBack()}>
                        Back
                    </Button>}
                    <Button className="step-submit-button"
                            type="primary"
                            htmlType="submit">
                        Submit
                    </Button>
                </div>

            </Form>
        );
    };
}


export default First;