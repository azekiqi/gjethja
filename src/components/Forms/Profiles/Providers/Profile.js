import React from "react";
import {connect} from "react-redux";
import "../Profiles.scss";
import {initialRegisterDataObject} from "../../../../utils/constants";
import BlankProfile from "../../../../assets/images/blank_profile.jpg";
import formConfig from "../../Config";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {...initialRegisterDataObject}
        }
    }

    componentDidMount() {
        this.props.getUser().then(res => {
            this.setState({user: res.data});
        })
    }

    setSelectedJobs = (jobs) => {
        this.setState({jobs: jobs})
    }



    renderProfile = () => {
        const {user} = this.state;
        const image = (user && user.image) ? "data:image/png;base64," + user.image : BlankProfile;
        return (
            <div className="container">
                <form className="register-form">
                    <div className="register-title mt-5"> My Profile!</div>
                    <div className="row">

                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    Picture
                                </div>
                                <div className="card-body pb-0">
                                    <div className="profile-picture-container">
                                        <img
                                            alt="Logo"
                                            className="profile-picture"
                                            src={image}  />
                                    </div>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="name-input">Foto e profilit: </label>
                                    <input type="file"
                                           id="name-input"
                                           className="form-control p-1"
                                           placeholder="Image"
                                           onChange={(e) => {
                                               this.setState({ user: {...user, image: e.target.files && e.target.files[0] ? e.target.files[0] : null}})
                                           }}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">
                                    Profile
                                </div>
                                <div className="card-body">

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
                                                           this.setState({user: {...user, firstName: e.target.value}})
                                                       }}/>
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
                                                           this.setState({user: {...user, lastName: e.target.value}})
                                                       }}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Numri i telefonit:</label>
                                        <input type="text"
                                               id="phone-input"
                                               className="form-control"
                                               placeholder="Numri i telefonit"
                                               value={this.state.user.phoneNumber}
                                               onChange={(e) => {
                                                   this.setState({user: {...user, phoneNumber: e.target.value}})
                                               }}/>
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
                                                        this.setState({user: {...user, city: e.target.value}})
                                                    }}>
                                                    <option defaultValue>{this.state.user.city}</option>
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
                                                           this.setState({user: {...user, address: e.target.value}})
                                                       }}
                                                       placeholder={this.state.user.address}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="city-input">Edukimi: </label>
                                                <select
                                                    id="city-input"
                                                    className="form-control"
                                                    defaultValue="Zgjedh shkallen e edukimit"
                                                    onChange={(e) => {
                                                        this.setState({user: {...user, education: e.target.value}})
                                                    }}>
                                                    <option defaultValue>{this.state.user.education}</option>
                                                    <option value="ulet">I ulët</option>
                                                    <option value="mesem">I mesëm</option>
                                                    <option value="larte">I lartë</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="jobs-input">Profesioni i përzgjedhur: </label>
                                                <input type="multiselect"
                                                       id="jobs-input"
                                                       className="form-control"
                                                       value={this.state.user.jobs}
                                                       onChange={(e) => {
                                                           this.setState({user: {...user, jobs: e.target.value}})
                                                       }}
                                                       placeholder={this.state.user.jobs}/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="bio-input">Biografi e shkurtër: </label>
                                            <input type="text"
                                                   id="bio-input"
                                                   className="form-control"
                                                   placeholder={this.state.user.bio}
                                                   value={this.state.user.bio}
                                                   onChange={(e) => {this.setState({user: {...user, bio: e.target.value}})
                                                   }}/>
                                        </div>
                                    </div>

                                    <div className="register-button">
                                        <button type="button" onClick={() => this.handleSubmit()}>Edit Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    };
}

export default Profile;