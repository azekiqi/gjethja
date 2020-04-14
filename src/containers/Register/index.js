import React from 'react';
import './styles.scss';
import {Link} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        }
    }

    render() {
        return (
            <div>
                <div className={"register"}>
                    REGISTER
                </div>
                <div className={"button"}>
                    <Link to={"/home"}>RETURN TO HOME</Link>
                </div>
            </div>
        );
    }

}

export default Register;
