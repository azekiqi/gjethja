import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import Post from "../../components/Post/Post";
import { posts } from "../../utils/posts";
import Footer from "../../components/Footer/Footer";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';




class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: "post"
        }
    }

    filteredPosts = () => {
        return posts.filter(post => {
            return post.type == this.state.currentTab;
        })
    }

    render() {
        const filteredPosts = this.filteredPosts(posts);
        return (
            <div>
                <Header/>
                <div className="home-container">
                    <Sidebar/>
                    <div className="main_content">
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
                                filteredPosts.map((post, index) => {
                                    return <Post
                                        id={post.id}
                                        title={post.title}
                                        description={post.description} />
                                })
                            }
                        </div>
                    </div>
                    {/*<Fab className={"add-icon"} aria-label="add">*/}
                    {/*    <AddIcon />*/}
                    {/*</Fab>*/}
                </div>
                <Footer />
            </div>
        );
    }

}

export default Home;
