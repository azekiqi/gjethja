import React from 'react';
import './Register.scss';
import {providerRegister} from '../../actions/user';
import {connect} from "react-redux";
import MultiSelect from "react-multi-select-component";
import StepForm from "../../components/StepForm/StepForm";
import FirstStep from "../../components/StepForm/Steps/FirstStep";
import SecondStep from "../../components/StepForm/Steps/SecondStep";
import {options} from "../../utils/constants";
import axios from 'axios';


class ProvidersRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    steps = [
        {
            step: 1,
            component: <FirstStep/>
        },
        {
            step: 2,
            component: <SecondStep />
        }
    ]
    questions = [
        {
            id: 1,
            question: "How are you?"
        },
        {
            id: 2,
            question: "How old are you?"
        }
    ]


    render() {
        return (
            <div className="container-fluid register-container">
            <StepForm
            steps = { this.steps }
            />

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
    registerUser: (data) => dispatch(providerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersRegister);