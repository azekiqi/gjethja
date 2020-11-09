import React from 'react';
import './Register.scss';
import {providerRegister, seekerRegister} from '../../actions/user';
import {connect} from "react-redux";
import First from "../../components/Forms/Step/Steps/First";
import Second from "../../components/Forms/Step/Steps/Seekers/Second";
import Header from "../../components/Header/Header";
import Step from "../../components/Forms/Step/Step";
import Footer from "../../components/Footer/Footer";

class Seekers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: null
        }
    }

    steps = [
        {
            step: 1,
            component: <First/>
        },
        {
            step: 2,
            component: <Second/>
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
                    <Step
                        steps={this.steps}
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
    registerUser: (data) => dispatch(seekerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Seekers);