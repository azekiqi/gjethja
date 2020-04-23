import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import Post from "../../components/Post/Post";
import { posts } from "../../utils/data";

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
                                Child Care
                            </div>
                            <div className="navigation-link">
                                Elder Care
                            </div>
                            <div className="navigation-link">
                                Pet Care
                            </div>
                            <div className="navigation-link">
                                Housekeeping
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
                    </div>
                </div>
            </div>

        );
    }

}

export default Home;
