import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./UserLogin.scss";

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    class UserLogin extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }

        render() {
            return (
                <>
                    <Header/>
                    <div className="form">

                        <p className="login-title"> Kyçu!</p>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ju lutem shënoni email-ën e juaj!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ju lutem shënoni fjalëkalimin e juaj!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                {/*<a className="login-form-forgot" href="">*/}
                                {/*    Forgot password*/}
                                {/*</a>*/}
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    onClick={(e) => this.handleSubmit(e)}>
                                    Kyçu
                                </Button>
                                Ose <a href="/#/register">Regjistrohu tani!</a>
                            </Form.Item>
                        </Form>
                    </div>
                    <Footer/>
                </>
            );
        };
    }

export default UserLogin;