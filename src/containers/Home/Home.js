import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import Post from "../../components/Post/Post";
import {getPosts} from "../../actions/posts";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: "post"
        }
    }

    componentDidMount() {
        this.props.getPosts();
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
                                    onClick={() => this.setState({ currentTab: "post" })}>
                                    Posts
                                </button>
                            </div>
                            <div className="navigation-link">
                                <button
                                    onClick={() => this.setState({ currentTab: "profile" })}>
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
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: filterByAge => dispatch(getPosts(filterByAge))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
