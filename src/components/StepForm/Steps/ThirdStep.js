import React from "react";
import "./Steps.scss";
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Dropdown,
    Row,
    Col,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
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

class ThirdStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
        >
            <Form.Item
                name="upload"
                label="Fotografija e profilit"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Fotografia e profilit është opsionale"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined className="txt-upload"/>} className="btn-upload">Click to upload</Button>
                </Upload>
            </Form.Item>

        <Form.Item
            name="Profesioni"
            label="Përzgjedh profesionin"
            rules={[
            {required: true}
        ]}>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Përzgjedh profesionin... "
                onChange={handleChange}
                optionLabelProp="label"
            >
                <Option
                    value="kids"
                    label="Kujdes për fëmijë">
                    <div className="demo-option-label-item">
                        Kujdes për fëmijë
                    </div>
                </Option>
                <Option
                    value="elder"
                    label="Kujdes për të moshuarit">
                    <div className="demo-option-label-item">
                        Kujdes për të moshuarit
                    </div>
                </Option>
                <Option
                    value="home"
                    label="Mirëmbajtje e shtëpisë">
                    <div className="demo-option-label-item">
                        Mirëmbajtje e shtëpisë
                    </div>
                </Option>
                <Option
                    value="pet"
                    label="Kujdes për kafshët">
                    <div className="demo-option-label-item">
                        Kujdes për kafshët
                    </div>
                </Option>
            </Select>
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

        </Form>
    );
}
}

export default ThirdStep;
