import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import Post from "../../components/Post/Post";
import { posts } from "../../utils/posts";
import Profile from "../../components/Profile/Profile";
import { profiles } from "../../utils/profiles";


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Sidebar/>

                    <div className={"main_content"}>
                        <div className="navigation">
                            <div className="navigation-link">
                                <a href="child">Kujdesi për fëmijë</a>
                            </div>
                            <div className="navigation-link">
                                <a href="elder">Kujdesi për të moshuarit</a>
                            </div>
                            <div className="navigation-link">
                                <a href="pets">Kujdesi për kafshët</a>
                            </div>
                            <div className="navigation-link">
                                <a href="housekeeping">Kujdesi për shtëpinë</a>
                            </div>
                        </div>
                        <div className="posts">
                            {
                                posts.map((post, index) => {
                                    return <Post
                                        id={post.id}
                                        title={post.title}
                                        description={post.description} />
                                })
                            }
                        </div>
                        {/*<div className="profiles">*/}
                        {/*    {*/}
                        {/*        profiles.map((profile, index) => {*/}
                        {/*            return <Profile*/}
                        {/*                id={profile.id}*/}
                        {/*                title={profile.title}*/}
                        {/*                description={profile.description} />*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

        );
    }

}

export default Home;
