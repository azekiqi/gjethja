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
            <div className="container">
                <div className="login">
                    Kyçy
                </div>
                <div className={"button"}>
                    <Link to={"/home"}>Kthehu në ballinë</Link>
                </div>
            </div>
        );
    }

}

export default Login;
