import React from 'react';
import './Register.scss';
import {providerRegister} from '../../actions/user';
import {connect} from "react-redux";
import MultiSelect from "react-multi-select-component";
import StepForm from "../../components/StepForm/StepForm";
import FirstStep from "../../components/StepForm/Steps/FirstStep";
import SecondStep from "../../components/StepForm/Steps/SecondStep";
import ThirdStep from "../../components/StepForm/Steps/ThirdStep";
import {options} from "../../utils/constants";
import axios from 'axios';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


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
        },
        {
            step: 3,
            component: <ThirdStep />
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
            <>
                <Header />
            <div className="container-fluid register-container">
            <StepForm
            steps = { this.steps }
            />

            </div>
                <Footer />
                </>
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