import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import Post from "../../components/Post/Post";
import {getPosts} from "../../actions/posts";
import { connect } from "react-redux";
import {HomeTabs} from "../../utils/constants";
import {getProfiles} from "../../actions/profiles";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: HomeTabs.Posts
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

    render() {
        return (
            <div>
                <Header/>
                <div className="home-container">

                    <Sidebar/>

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
                        <div className="posts">
                            {
                                this.props.posts.map((post, index) => {
                                    return <Post
                                        id={post.id}
                                        title={post.title}
                                        description={post.description} />
                                })
                            }
                        </div>
                        <div className="profiles">
                            {
                                this.props.profiles.map((profile, index) => {
                                    return <Post
                                        id={profile.id}
                                        title={profile.title}
                                        description={profile.description} />
                                })
                            }
                        </div>
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
    getProfiles: data => dispatch(getProfiles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
