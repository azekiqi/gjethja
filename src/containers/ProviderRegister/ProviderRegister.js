import React from 'react';
import axios from 'axios';
import './ProviderRegister.scss';
import {PostRequest} from "../../utils/PostRequest";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { register } from '../../actions/user';
import { connect } from "react-redux";

class ProviderRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profilePicture: "",
            education: "",
            jobs: "",
            selectedFile: null,
        }
    }


    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };


    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);

        axios.post("api/uploadfile", formData);
    };

    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                </div>
            );
        }
    };

handleSubmit = (event) => {
        this.props.registerUser(this.formattedState(this.state));
    }

    render() {
        return (
            <div className="container-fluid register-container">

                <div className="row">
                    <div className="col">
                        <form className="register-form">
                            <div className="register-title">Vazhdo regjistrimin! </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="name-input">Profile Picture: </label>
                                    <input
                                        type="file"
                                        id="imageFile"
                                        name='imageFile'
                                        onChange={this.imageUpload}/></div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="gender-input">Edukimi: </label>
                                <select
                                    id="gender-input"
                                    className="form-control"
                                    onChange={(e) => this.setState({ gender: e.target.value })}
                                    defaultValue="Zgjedh edukimin">
                                    <option defaultValue>Zgjedh edukimin</option>
                                    <option value="Ulet">I ulët</option>
                                    <option value="Mesem">I mesëm</option>
                                    <option value="Larte">I lartë</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio-input">Jobs: </label>
                                <input type="text"
                                       id="bio-input"
                                       className="form-control"
                                       placeholder="Jobs"
                                       value={this.state.bio}
                                       onChange={(e) => this.setState({ bio: e.target.value })} /></div>


                            <div>
                                <label htmlFor="bio-input">Certifikata: </label>
                                <div>
                                    <input type="file" onChange={this.onFileChange} />
                                    <button onClick={this.onFileUpload}>
                                        Upload!
                                    </button>
                                </div>
                                {this.fileData()}
                            </div>

                            <div className="register-button">
                                <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

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
    registerUser: (data) => dispatch(register(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProviderRegister);
