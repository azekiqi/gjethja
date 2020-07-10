import React from 'react';
import './CreatePost.scss';
import {createPost} from "../../actions/posts";
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

    handleSubmit = event => {
        this.props.createPost(this.state).then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div className="create-post-container">

                <div className="row">
                    <div className="col-6 mx-auto">

                        <div className="create-post-title"> Krijo një post </div>

                        <form className="create-post-form">
                            <div className="form-group">
                                <label for="name-input">Titulli: </label>
                                <input type="text"
                                       id="name-input"
                                       className="form-control"
                                       placeholder="Titulli"
                                       value={this.state.firstName}
                                       onChange={(e) => this.setState({ title: e.target.value })} /></div>

                            <div className="form-group">
                                <label htmlFor="name-input">Përshkrimi: </label>
                                <input type="text"
                                       id="name-input"
                                       className="form-control"
                                       placeholder="Përshkrimi"
                                       value={this.state.firstName}
                                       onChange={(e) => this.setState({ description: e.target.value })}/></div>

                            <div className="form-group">
                                <label htmlFor="status-input">Statusi: </label>
                                <select
                                    id="status-input"
                                    className="form-control"
                                    defaultValue="Select status"
                                    onChange={(e) => this.setState({ status: e.target.value })}>
                                    <option defaultValue>Zgjedh statusin</option>
                                    <option value="open">Hapur</option>
                                    <option value="closed">Mbyllur</option>
                                </select>
                            </div>

                            <button type="button" onClick={() => this.handleSubmit()}>Posto</button>
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
    createPost: (data) => dispatch(createPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);