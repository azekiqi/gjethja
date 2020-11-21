import React from "react";
import {connect} from "react-redux";
import {editProfile, getUser, uploadProfilePicture} from "../../actions/user";
import "./Profile.scss";
import {initialRegisterDataObject} from "../../utils/constants";

class profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: { ...initialRegisterDataObject }
        }
    }

    componentDidMount() {
        this.props.getUser().then(res => {
            this.setState({user: res.data});
        })
    }

    handleSubmit = (event) => {
        this.props.editProfile(this.state.user).then(res => {
            if (this.state.image) {
                this.props.uploadProfilePicture(this.state.image).then(res => {
                    this.props.getUser().then(res => {
                        this.setState({user: res.data});
                    })
                })
            } else {
                this.props.getUser().then(res => {
                    this.setState({user: res.data});
                })
            }
        })
    }

    setSelectedJobs = (jobs) => {
        this.setState({jobs: jobs})
    }

    renderProfile = () => {
        const {user} = this.state;
        return (
            <div className="row pb-5">
                <div className="col-6 mx-auto register-form-container">
                    <form className="register-form">
                        <div className="register-title"> My Profile!</div>

                        <div className="row">
                            <div className="col-4 mx-auto">
                                <img src={"data:image/png;base64," + (user && user.image)} alt="Logo"
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

                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="name-input">Emri: </label>
                                    <input type="text"
                                           id="name-input"
                                           className="form-control"
                                           placeholder="Emri"
                                           value={this.state.user.firstName}
                                           onChange={(e) => {
                                               this.setState({
                                                   user: {
                                                       ...this.state.user,
                                                       firstName: e.target.value
                                                   }
                                               })
                                           }}/>
                                    <div className="error-style">{this.state.firstNameError}</div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="lastname-input">Mbiemri: </label>
                                    <input type="text"
                                           id="lastname-input"
                                           className="form-control"
                                           placeholder="Mbiemri"
                                           value={this.state.user.lastName}
                                           onChange={(e) => {
                                               this.setState({
                                                   user: {
                                                       ...this.state.user,
                                                       lastName: e.target.value
                                                   }
                                               })
                                           }}/>
                                    <div className="error-style">{this.state.lastNameError}</div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col">
                            <label htmlFor="phone">Numri i telefonit:</label>
                            <input type="text"
                                   id="phone-input"
                                   className="form-control"
                                   placeholder="Numri i telefonit"
                                   value={this.state.user.phoneNumber}
                                   onChange={(e) => {
                                       this.setState({
                                           user: {
                                               ...this.state.user,
                                               phoneNumber: e.target.value
                                           }
                                       })
                                   }}/>
                            <div className="error-style">{this.state.phoneNumberError}</div>
                        </div>
                        </div>

                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="city-input">Qyteti: </label>
                                    <select
                                        id="city-input"
                                        className="form-control"
                                        defaultValue="Zgjedh qytetin"
                                        onChange={(e) => {
                                            this.setState({
                                                user: {
                                                    ...this.state.user,
                                                    city: e.target.value
                                                }
                                            })
                                        }}>
                                        <option defaultValue>Zgjedh qytetin</option>
                                        <option value="Prishtine">Prishtine</option>
                                        <option value="Peje">Peje</option>
                                        <option value="Prizren">Prizren</option>
                                        <option value="Gjakovë">Gjakove</option>
                                        <option value="Fushe Kosove">Fushe Kosove</option>
                                        <option value="Ferizaj">Ferizaj</option>
                                        <option value="Vushtrri">Vushtrri</option>
                                        <option value="Gjilan">Gjilan</option>
                                        <option value="Mitrovice">Mitrovice</option>
                                    </select>
                                    <div className="error-style">{this.state.cityError}</div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="address-input">Adresa: </label>
                                    <input type="text"
                                           id="address-input"
                                           className="form-control"
                                           value={this.state.user.address}
                                           onChange={(e) => {
                                               this.setState({
                                                   user: {
                                                       ...this.state.user,
                                                       address: e.target.value
                                                   }
                                               })
                                           }}
                                           placeholder="Adresa"/>
                                    <div className="error-style">{this.state.addressError}</div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio-input">Biografi e shkurtër: </label>
                            <input type="text"
                                   id="bio-input"
                                   className="form-control"
                                   placeholder="Biografia"
                                   value={this.state.user.bio}
                                   onChange={(e) => {
                                       this.setState({
                                           user: {
                                               ...this.state.user,
                                               bio: e.target.value
                                           }
                                       })
                                   }}/></div>

                        <div className="register-button">
                            <button type="button" onClick={() => this.handleSubmit()}>Edit Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };


    render() {
        return (
            <div className="container-fluid register-container">
                <div className="row">
                    <div className="col">
                        <div className="navigation">

                        </div>
                    </div>
                </div>
                {this.renderProfile()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUser()),
    editProfile: (data) => dispatch(editProfile(data)),
    uploadProfilePicture: (data) => dispatch(uploadProfilePicture(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);