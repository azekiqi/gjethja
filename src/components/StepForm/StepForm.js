import React from "react";
import "./StepForm.scss";

class StepForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        }
    }

    renderCurrentStep = () => {
        const step = this.props.steps.find(step => step.step == this.state.step);
        return step.component;
    }

    handleNext = () => {
        const index = this.props.steps.findIndex(step => step.step == this.state.step);
        if((index + 1) != this.props.steps.length) {
            this.setState({step: this.state.step + 1})
        }
    }

    handleBack = () => {
        this.setState({step: this.state.step - 1})
    }

    isBackButtonVisible = () => {
        const index = this.props.steps.findIndex(step => step.step == this.state.step);
        return index != 0;
    }

    render() {
        return(
            <div class="step-form">
                { this.renderCurrentStep() }
                <div className="float-right">
                    {this.isBackButtonVisible() &&
                    <button onClick={() => this.handleBack()} type="back" className="btn btn-primary mr-3">Back</button>}
                    <button onClick={() => this.handleNext()} type="next" className="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }
}

export default StepForm;