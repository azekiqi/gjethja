import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "../Steps.scss";
import {Form, Input, Select, Button, AutoComplete, DatePicker} from 'antd';
import formConfig from "../../../Config";
import moment from "moment";

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
            education: "",
            bio: "",
        }
    }

    formRef = React.createRef();

    componentDidMount() {
        const {data} = this.props;
        this.formRef.current.setFieldsValue({
            [formConfig.gender.name]: data[formConfig.gender.name] ? moment(data[formConfig.gender.name]) : "",
            [formConfig.phone.name]: data[formConfig.phone.name],
            [formConfig.city.name]: data[formConfig.city.name],
            [formConfig.address.name]: data[formConfig.address.name],
            [formConfig.education.name]: data[formConfig.education.name],
            [formConfig.bio.name]: data[formConfig.bio.name],
        });
    }

    handleChange = (value, name) => {
        this.props.handleChange(value, name);
    }

    render() {
        const {hasBack} = this.props;
        return (
            <Form
                {...formItemLayout}
                // form={form}
                name="register"
                ref={this.formRef}
                onFinish={() => this.props.handleSubmit()}
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
                        allowClear
                        placeholder={formConfig.gender.placeholder}
                        onChange={(e) => {
                            this.handleChange(e, formConfig.gender.name)
                        }}>
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
                        placeholder={formConfig.phone.placeholder}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.phone.name)
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name={formConfig.city.name}
                    label={formConfig.city.label}
                    rules={formConfig.city.rules}>
                    <Select
                        allowClear
                        placeholder={formConfig.city.placeholder}
                        onChange={(e) => {
                            this.handleChange(e, formConfig.city.name)
                        }}>
                        <Option value="Prishtine">Prishtinë</Option>
                        <Option value="Peje">Pejë</Option>
                        <Option value="Prizren">Prizren</Option>
                        <Option value="Ferizaj">Ferizaj</Option>
                        <Option value="Gjakove">Gjakove</Option>
                        <Option value="Mitrovice">Mitrovice</Option>
                        <Option value="Gjilan">Gjilan</Option>
                        <Option value="Vushtrri">Vushtrri</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={formConfig.address.name}
                    label={formConfig.address.label}
                    rules={formConfig.address.rules}>
                    <Input
                        placeholder={formConfig.address.placeholder}
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.address.name)
                        }}/>
                </Form.Item>

                <Form.Item
                    name={formConfig.education.name}
                    label={formConfig.education.label}
                    rules={formConfig.education.rules}>
                    <Select
                        allowClear
                        placeholder={formConfig.education.placeholder}
                        onChange={(e) => {
                            this.handleChange(e, formConfig.education.name)
                        }}>
                        <Option value="ulet">I ulët</Option>
                        <Option value="mesem">I mesëm</Option>
                        <Option value="larte">I lartë</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={formConfig.bio.name}
                    label={formConfig.bio.label}
                    rules={formConfig.bio.rules}>
                    <Input.TextArea
                        placeholder={formConfig.bio.placeholder}
                        onChange={(e) => {
                            this.handleChange(e.target.value, formConfig.bio.name)
                        }}/>
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

export default Second;