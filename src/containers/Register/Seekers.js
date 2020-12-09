import React from 'react';
import './Register.scss';
import {seekerRegister} from '../../actions/user';
import {connect} from "react-redux";
import First from "../../components/Forms/Step/Steps/First";
import Second from "../../components/Forms/Step/Steps/Seekers/Second";
import Step from "../../components/Forms/Step/Step";
import {initialRegisterDataObject} from "../../utils/constants";

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
    registerUser: (data) => dispatch(seekerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Seekers);