import React from 'react';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import './styles.scss';
import Post from "../../components/Post";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        }
    }

    // EXAMPLE POSTS
    posts = [
        {
            "id": 1,
            "title": "Post title 1",
            "description":  "Post description 1"
        },
        {
            "id": 2,
            "title": "Post title 2",
            "description":  "Post description 2"
        },
        {
            "id": 3,
            "title": "Post title 3",
            "description":  "Post description 3"
        },
    ];

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Sidebar/>

                    <div className={"main_content"}>
                        {
                            this.posts.map((post, index) => {
                                return <Post
                                    id={post.id}
                                    title={post.title}
                                    description={post.description} />
                            })
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default Home;
