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
        return step;
    }

    handleNext = () => {
        const index = this.props.steps.findIndex(step => step.step == this.state.step);
        const step = this.props.steps[index];
        if((index + 1) != this.props.steps.length) {
            step.handleStepSubmit();
            this.setState({step: this.state.step + 1})
        } else {
            this.props.handleSubmit();
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
        // const childrenWithProps = React.Children.map(this.props.children, child => {
        //     // checking isValidElement is the safe way and avoids a typescript error too
        //     const props = { doSomething };
        //     if (React.isValidElement(child)) {
        //         return React.cloneElement(child, props);
        //     }
        //     return child;
        // });
        return(
            <div class="step-form">
                { this.props.steps.map(step =>  {
                    return (
                        step.step == this.state.step && React.cloneElement(
                            step.component,
                            {
                                handleSubmit: () => alert("submited step 1")
                            }
                        )
                    )
                }) }
                <div className="float-right">
                    {this.isBackButtonVisible() &&
                    <button onClick={() => this.handleBack()} type="back" className="btn btn-primary mr-3">Kthehu</button>}
                    <button onClick={() => this.handleNext()} type="next" className="btn btn-primary">Vazhdo</button>
                </div>
            </div>
        )
    }
}

export default StepForm;