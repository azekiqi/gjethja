import React from 'react';
import './Register.scss';
import {providerRegister} from '../../actions/user';
import {connect} from "react-redux";
import MultiSelect from "react-multi-select-component";
import Step from "../../components/Forms/Step/Step";
import First from "../../components/Forms/Step/Steps/First";
import Second from "../../components/Forms/Step/Steps/Providers/Second";
import Third from "../../components/Forms/Step/Steps/Providers/Third";
import {options} from "../../utils/constants";
import axios from 'axios';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


class Providers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: null
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
            component: <Second />,
            handleStepSubmit: () =>  alert("Submit step 2")
        },
        {
            step: 3,
            component: <Third />
        }
    ]

    handleSubmit = (event) => {
        this.props.registerUser();
    }

    render() {
        return (
            <div className="container-fluid register-container">
                <Step
                    handleSubmit={() => alert("REGISTER")}
                    steps = { this.steps }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Providers);