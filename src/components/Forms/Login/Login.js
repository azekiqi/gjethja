import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Login.scss";
import formConfig from "../Config";
import {confirm, login} from "../../../actions/user";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        const data = { ...this.state };
        console.log(data);
        this.props.handleSubmit(data);
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

    render() {
        return (
            <div className="form">
                <Form
                    name="login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={this.onFinish}>

                    <p className="login-title"> Kyçu!</p>

                    <Form.Item
                        name={formConfig.email.name}
                        rules={formConfig.email.rules}>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               value={this.state.email}
                               onChange={this.emailhandler}
                               placeholder={formConfig.email.placeholder}/>
                    </Form.Item>

                    <Form.Item
                        name={formConfig.password.name}
                        rules={formConfig.password.rules}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type={formConfig.password.type}
                            value={this.state.password}
                            onChange={this.passwordhandler}
                            placeholder={formConfig.password.placeholder}/>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Kyçu
                    </Button>

                    Ose <a href="/#/register">Regjistrohu tani!</a>
                </Form>
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    login: data => {
        console.log("omg", data);
        dispatch(login(data))
    },
    confirm: data => dispatch(confirm(data))
})

export default withRouter(connect(null, mapDispatchToProps)(Login));