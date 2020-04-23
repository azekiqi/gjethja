import React from 'react';
import './Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        }
    }

    render() {
        return (
            <div>
                <div className={"login"}>
                    LOGIN
                </div>
                <div className={"button"}>
                    <Link to={"/home"}>RETURN TO HOME</Link>
                </div>
            </div>
        );
    }

}

export default Login;
