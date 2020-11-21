import React from 'react';
import './Register.scss';
import {providerRegister} from '../../actions/user';
import {connect} from "react-redux";
import Step from "../../components/Forms/Step/Step";
import First from "../../components/Forms/Step/Steps/First";
import Second from "../../components/Forms/Step/Steps/Providers/Second";
import Third from "../../components/Forms/Step/Steps/Providers/Third";
import {initialRegisterDataObject} from "../../utils/constants";


class Providers extends React.Component {
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
            component: <First/>,
            handleStepSubmit: () => alert("Submit step 1")
        },
        {
            step: 2,
            component: <Second/>,
            handleStepSubmit: () => alert("Submit step 2")
        },
        {
            step: 3,
            component: <Third/>,
            handleStepSubmit: () => alert("Registered")
        }
    ]

    handleSubmit = () => {
        const { data } = this.state;
        console.log(data);
        this.props.registerUser(data);
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
                    handleSubmit={() => this.handleSubmit()}
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
    registerUser: (data) => dispatch(providerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Providers);