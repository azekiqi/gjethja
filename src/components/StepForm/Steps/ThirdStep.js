import React from "react";

class ThirdStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        }
    }

    handleSubmit = (event) => {
            if (this.state.image) {
                this.props.uploadProfilePicture(this.state.image).then(res => {
                    this.props.getUser().then(res => {
                        this.setState({user: res.data});
                    })
                })
            }
    }

    render () {
        return(
            <div className="container-fluid register-container">
                <div className="row">
                    <div className="col">
                        <form className="register-form">

                    <div className="register-title"> Vendos foton e profilit!</div>
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <img src={"data:image/png;base64," + this.state.image} alt="Logo"
                                 style={{maxWidth: "200px", maxHeight: "200px"}}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name-input">Foto e profilit: </label>
                                <input type="file"
                                       id="name-input"
                                       className="form-control p-1"
                                       placeholder="Image"
                                       onChange={(e) => {
                                           this.setState({
                                               user: {
                                                   ...this.state.user,
                                                   image: e.target.files && e.target.files[0] ? e.target.files[0] : null
                                               }
                                           })
                                       }}/>
                                <div className="error-style">{this.state.firstNameError}</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        );
    }
}


export default ThirdStep;