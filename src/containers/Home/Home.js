import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import Post from "../../components/Post/Post";
import {deletePost, getPosts} from "../../actions/posts";
import { connect } from "react-redux";
import {CARD_OPTIONS, HomeTabs} from "../../utils/constants";
import {getProfiles} from "../../actions/profiles";
import Modal from 'react-modal';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import {injectStripe, StripeProvider} from "react-stripe-elements";
import Stripe from "../../components/Stripe/Stripe";
import {Switch} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_test_51H1teeE9l7621wtln7yA1DXyqVAQ4Ld6FJwB2iLYNZKtmluZEZ93jeg2ycwuKRGOj71C7awnuQBN5qDYrDkodgp100Xdajq8Lw');

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: HomeTabs.Posts,
            isModalOpen: false,
            modalId: null,
        }
    }

    componentDidMount() {
        const { currentTab } = this.state;
        if(currentTab == HomeTabs.Posts) {
            this.props.getPosts();
        } else {
            this.props.getProfiles();
        }
    }

    switchTab = (tab) => {
        if(tab == HomeTabs.Posts) {
            this.props.getPosts();
        } else {
            this.props.getProfiles();
        }
        this.setState({ currentTab: tab });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    openModal = (id) => {
        this.setState({ isModalOpen: true, modalId: id });
    }

    render() {
        const { currentTab, isModalOpen, modalId } = this.state;
        return (
            <div>
                <Header/>
                <div className="home-container">

                    <Sidebar/>

                    <Modal

                        isOpen={isModalOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Payment Modal"
                        className="custom-modal"
                        overlayClassName="custom-modal-overlay">

                        <Elements stripe={stripePromise}>
                            <Stripe id={modalId} onPaymentFinish={() => this.closeModal()} />
                        </Elements>

                    </Modal>


                    <div className="main-content">
                        <div className="navigation">
                            <div className="navigation-link">
                                <button
                                    onClick={() => this.switchTab(HomeTabs.Posts)}>
                                    Posts
                                </button>
                            </div>
                            <div className="navigation-link">
                                <button
                                    onClick={() => this.switchTab(HomeTabs.Profiles)}>
                                    Profiles
                                </button>
                            </div>
                        </div>
                        {currentTab == HomeTabs.Posts && <div className="posts">
                            {
                                this.props.posts.map((post, index) => {
                                    return <Post
                                        id={post.id}
                                        title={post.user}
                                        status={post.status}
                                        description={post.description}/>
                                })
                            }
                        </div>}
                        {currentTab == HomeTabs.Profiles && <div className="profiles">
                            {
                                this.props.profiles.map((profile, index) => {
                                    return <Post
                                        id={profile.id}
                                        title={profile.firstName + " " + profile.lastName}
                                        info={"Edukimi: " + profile.education}
                                        description={"Nr. Tel: " + profile.phoneNumber}
                                    />
                                })
                            }
                        </div>}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        profiles: state.profiles
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: data => dispatch(getPosts()),
    getProfiles: data => dispatch(getProfiles()),
    deletePost: (data) => dispatch(deletePost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
