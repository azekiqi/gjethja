import React from "react";
import "../Steps.scss";
import {Form, Select, Button, Upload, Checkbox, Dropdown, Row, Col, Input} from 'antd';
import {UploadOutlined, InboxOutlined} from '@ant-design/icons';
import formConfig from "../../../Config";

const {Option} = Select;

const formItemLayout = {
    labelCol: {span: 9},
    wrapperCol: {span: 15},
};

const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

function handleChange(value) {
    console.log(`selected ${value}`);
}

class Third extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profession: "",
            job: "",
        }
    }


    formRef = React.createRef();

    componentDidMount() {
        const {data} = this.props;
        this.formRef.current.setFieldsValue({
            [formConfig.job.name]: data[formConfig.job.name],
        });
    }

    handleChange = (value, name) => {
        this.props.handleChange(value, name);
    }

    render() {
        const {hasBack} = this.props;

        return (
            <Form
                ref={this.formRef}
                name="validate_other"
                {...formItemLayout}
                onFinish={() => this.props.handleSubmit()}
            >

                <Form.Item
                    name="upload"
                    label="Fotografia e profilit"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Fotografia e profilit është opsionale"
                >
                    <Upload
                        name="logo"
                        listType="picture"
                        onChange={(e) => console.log("event")}>
                        <Button icon={<UploadOutlined className="txt-upload"/>} className="btn-upload">Click to
                            upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name={formConfig.job.name}
                    label={formConfig.job.label}
                    rules={formConfig.job.rules}>
                    <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        optionLabelProp="label"
                        placeholder={formConfig.job.placeholder}
                        onChange={(e) => {
                            this.handleChange(e, formConfig.job.name)
                        }}>
                        <Option
                            value="babysitter"
                            label="Kujdes për fëmijë">
                            <div className="demo-option-label-item">
                                Kujdes për fëmijë
                            </div>
                        </Option>
                        <Option
                            value="eldercare"
                            label="Kujdes për të moshuarit">
                            <div className="demo-option-label-item">
                                Kujdes për të moshuarit
                            </div>
                        </Option>
                        <Option
                            value="housekeeper"
                            label="Mirëmbajtje e shtëpisë">
                            <div className="demo-option-label-item">
                                Mirëmbajtje e shtëpisë
                            </div>
                        </Option>
                        <Option
                            value="petcare"
                            label="Kujdes për kafshët">
                            <div className="demo-option-label-item">
                                Kujdes për kafshët
                            </div>
                        </Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={formConfig.agreement.name}
                    valuePropName="checked"
                    rules={[{
                        validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    }]}>
                    <Checkbox
                        onChange={(e) => {
                            this.handleChange(e.target.checked, formConfig.agreement.name)
                        }}>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
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
    }
}

export default Third;
