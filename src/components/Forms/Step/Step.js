import React from "react";
import "./Step.scss";

class Step extends React.Component{
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
                    const shouldBeVisible = step.step == this.state.step;
                    return (
                         shouldBeVisible && React.cloneElement(
                            step.component,
                            {
                                hasBack: this.isBackButtonVisible(),
                                data: this.props.data,
                                handleChange: (value, name) => this.props.handleChange(value, name),
                                handleBack: () => this.handleBack(),
                                handleSubmit: () => this.handleNext(),
                            }
                        )
                    )
                }) }
            </div>
        )
    }
}

export default Step;