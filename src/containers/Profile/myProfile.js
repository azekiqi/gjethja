import SeekersRegister from "../Register/SeekersRegister";
import {render} from "react-dom";
import React from "react";
import ProvidersRegister from "../Register/ProvidersRegister";
import {GET_POSTS} from "../../utils/constants";
import {GetPosts} from "../../utils/constants";
import MultiSelect from "react-multi-select-component";
import {HomeTabs, options} from "../../utils/constants";
import { connect } from "react-redux";
import {editProfile, getUser, seekerRegister} from "../../actions/user";
import Post from "../../components/Post/Post";
import Slideshow from "../Landingpage/Slideshow";
import {getPosts} from "../../actions/posts";

class myProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.props.editProfile().then(res => {
            this.setState({ res });
        })
        this.props.getPosts();
        this.props.getUser();
    }

    handleSubmit = (event) => {
        this.props.editProfile(this.formattedState(this.state));
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
        // this.setState(initialState);
    }

    formattedDateOfBirth = (date) => {
        let splitDate = date.split("-");
        return [splitDate[2], splitDate[1], splitDate[0]].join("-"); //reformat
    }

    formattedState = (state) => {
        return {
            ...state,
            dateOfBirth: this.formattedDateOfBirth(state.dateOfBirth),
            jobs: state.jobs.map(job => job.value),
            url: process.env.REACT_APP_CONFIRM_URL,
        }
    }

    setSelectedJobs = (jobs) => {
        this.setState({ jobs: jobs })
    }


    render() {
        return (
            <div>
            <div className="container-fluid register-container">

                <div className="row">
                    <div className="col register-form-container">
                        <form className="register-form">
                            <div className="register-title"> My Profile!</div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="name-input">Emri: </label>
                                        <input type="text"
                                               id="name-input"
                                               className="form-control"
                                               placeholder="Emri"
                                               value={this.state.user.firstName}
                                               onChange={(e) => this.setState({firstName: e.target.value})}/>
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
                                               onChange={(e) => this.setState({lastName: e.target.value})}/>
                                        <div className="error-style">{this.state.lastNameError}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email adresa:</label>
                                <input type="email-input"
                                       id="email-input"
                                       className="form-control"
                                       placeholder="Email adresa"
                                       value={this.state.user.email}
                                       onChange={(e) => this.setState({email: e.target.value})}/>
                                <div className="error-style">{this.state.emailError}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Numri i telefonit:</label>
                                <input type="text"
                                       id="phone-input"
                                       className="form-control"
                                       placeholder="Numri i telefonit"
                                       value={this.state.user.phoneNumber}
                                       onChange={(e) => this.setState({phoneNumber: e.target.value})}/>
                                <div className="error-style">{this.state.phoneNumberError}</div>
                            </div>


                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="password-input">Fjalëkalimi: </label>
                                        <input type="password"
                                               id="password-input"
                                               className="form-control"
                                               placeholder="Fjalëkalimi"
                                               value={this.state.user.password}
                                               onChange={(e) => this.setState({password: e.target.value})}/>
                                        <div className="error-style">{this.state.passwordError}</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="confirm-password-input">Përsërite fjalëkalimin: </label>
                                        <input type="password"
                                               id="confirm-password-input"
                                               className="form-control"
                                               value={this.state.user.confirmPassword}
                                               placeholder="Përsërite fjalëkalimin"
                                               onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
                                        <div className="error-style">{this.state.confPassError}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Data e lindjes: </label>
                                <input type="date"
                                       id="birthday-input"
                                       className="form-control"
                                       placeholder="wtf"
                                       value={this.state.user.dateOfBirth}
                                       onChange={(e) => this.setState({dateOfBirth: e.target.value})}/>
                                <div className="error-style">{this.state.dateOfBirthError}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender-input">Gjinia: </label>
                                <select
                                    id="gender-input"
                                    className="form-control"
                                    onChange={(e) => this.setState({gender: e.target.value})}
                                    defaultValue="Zgjedh gjininë">
                                    <option defaultValue>Zgjedh gjininë</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div className="error-style">{this.state.genderError}</div>
                            </div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city-input">Qyteti: </label>
                                        <select
                                            id="city-input"
                                            className="form-control"
                                            onChange={(e) => this.setState({city: e.target.value})}
                                            defaultValue="Zgjedh qytetin">
                                            <option defaultValue>Zgjedh qytetin</option>
                                            <option value="Prishtinë">Prishtinë</option>
                                            <option value="Pejë">Pejë</option>
                                            <option value="Prizren">Prizren</option>
                                            <option value="Gjakovë">Gjakovë</option>
                                            <option value="Fushë Kosovë">Fushë Kosovë</option>
                                            <option value="Ferizaj">Ferizaj</option>
                                            <option value="Vushtrri">Vushtrri</option>
                                            <option value="Gjilan">Gjilan</option>
                                            <option value="Mitrovicë">Mitrovicë</option>
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
                                               onChange={(e) => this.setState({address: e.target.value})}
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
                                       onChange={(e) => this.setState({bio: e.target.value})}/></div>

                            <div className="form-group">
                                <label htmlFor="education-input">Edukimi: </label>
                                <select
                                    id="education-input"
                                    className="form-control"
                                    onChange={(e) => this.setState({ education: e.target.value })}
                                    defaultValue="Zgjedh edukimin">
                                    <option defaultValue>Zgjedh edukimin</option>
                                    <option value="Ulet">I ulët</option>
                                    <option value="Mesem">I mesëm</option>
                                    <option value="Larte">I lartë</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Shërbimet: </label>
                                <MultiSelect
                                    options={options}
                                    value={this.state.jobs}
                                    onChange={this.setSelectedJobs}
                                    labelledBy={"Select"}
                                />
                                {/*<div className="error-style">{this.state.jobsError}</div>*/}
                            </div>


                            <div className="register-button">
                                <button type="button" onClick={() => this.handleSubmit()}>Edit Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

                {GET_POSTS && <div className="posts">
                    {
                        this.props.posts && this.props.posts.map((post, index) => {
                            return <Post
                                id={post.id}
                                title={post.title}
                                description={post.description}/>
                        })
                    }
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts,
    };
}

const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUser()),
    getPosts: data => dispatch(getPosts()),
    editProfile: (data) => dispatch(editProfile(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(myProfile);