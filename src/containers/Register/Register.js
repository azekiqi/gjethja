import React from 'react';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            referrer: null,
            type: null
        }
    }

    handleClickProvider = () => {
        console.log('Button is clicked!');
        this.setState({referrer: '/register/provider', type: 'provider'});
    }

    handleClickSeeker = () => {
        console.log('Button is clicked!');
        this.setState({referrer: '/register/seeker', type: 'seeker'});
    }

    render() {
        const {referrer} = this.state;
        if (referrer) return <Redirect to={referrer} />;
        return (
            <div>
                <div className="register">
                    <h1 className="heading">PËRZGJEDHENI MËNYRËN E REGJISTRIMIT</h1>
                <div className="register-b">
                    <button onClick={this.handleClickProvider}>Ofrues shërbimesh</button>
                </div>
                    <div className="register-b">
                    <button onClick={this.handleClickSeeker}>Kërkues shërbimesh</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Register;