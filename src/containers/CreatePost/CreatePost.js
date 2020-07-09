import React from 'react';
import './CreatePost.scss';
import {PostRequest} from "../../utils/PostRequest";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { register } from '../../actions/user';
import { connect } from "react-redux";

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            status: "",
        }
    }

    render() {
        return (
            <div className="create-post-container">

                <div className="row">
                    <div className="col-6 mx-auto">

                        <div className="create-post-title"> Create post </div>

                        <form className="create-post-form">
                            <div className="form-group">
                                <label for="name-input">Title: </label>
                                <input type="text"
                                       id="name-input"
                                       className="form-control"
                                       placeholder="Title"
                                       value={this.state.firstName}
                                       onChange={(e) => this.setState({ title: e.target.value })} /></div>

                            <div className="form-group">
                                <label htmlFor="name-input">Description: </label>
                                <input type="text"
                                       id="name-input"
                                       className="form-control"
                                       placeholder="Description"
                                       value={this.state.firstName}
                                       onChange={(e) => this.setState({ description: e.target.value })}/></div>

                            <div className="form-group">
                                <label htmlFor="status-input">Status: </label>
                                <select
                                    id="status-input"
                                    className="form-control"
                                    defaultValue="Select status"
                                    onChange={(e) => this.setState({ status: e.target.value })}>
                                    <option defaultValue>Select status</option>
                                    <option value="open">Open</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>

                            <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //
    };
}

const mapDispatchToProps = dispatch => ({
    registerUser: (data) => dispatch(register(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);