import React from 'react';
import './Register.scss';
import {providerRegister, seekerRegister} from '../../actions/user';
import {connect} from "react-redux";
import First from "../../components/Forms/Step/Steps/First";
import Second from "../../components/Forms/Step/Steps/Seekers/Second";
import Step from "../../components/Forms/Step/Step";
import Third from "../../components/Forms/Step/Steps/Providers/Third";
import {initialRegisterDataObject} from "../../utils/constants";
import { register } from '../../actions/user';

class Seekers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            data: { ...initialRegisterDataObject }
        }
    }

    steps = [
        {
            step: 1,
            component: <First />,
            handleStepSubmit: () =>  alert("Submit step 1")
        },
        {
            step: 2,
            component: <Second/>,
            handleStepSubmit: () => alert("Registered")
        }
    ]

    handleSubmit = (event) => {
        this.props.registerUser();
    }

    handleChange = (value, name) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value,
            }
        })
    }

    render() {
        return (
            <div className="container-fluid register-container">
                <Step
                    steps={this.steps}
                    data={this.state.data}
                    handleSubmit={() => alert("REGISTER")}
                    handleChange={(value, name) => this.handleChange(value, name)}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = dispatch => ({
    registerUser: (data) => dispatch(seekerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Seekers);