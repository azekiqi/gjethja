import React from 'react';
import './Register.scss';
import {providerRegister, seekerRegister} from '../../actions/user';
import {connect} from "react-redux";
import FirstStep from "../../components/StepForm/Steps/FirstStep";
import SecondStepS from "../../components/StepForm/Steps/SecondStepS";
import Header from "../../components/Header/Header";
import StepForm from "../../components/StepForm/StepForm";
import Footer from "../../components/Footer/Footer";

class SeekersRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: null
        }
    }

    steps = [
        {
            step: 1,
            component: <FirstStep />
        },
        {
            step: 2,
            component: <SecondStepS />
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
    registerUser: (data) => dispatch(seekerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeekersRegister);