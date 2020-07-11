import React from 'react';
import PostGenerator from './post-generator';
import Article from './articles/article';

class App extends React.Component {

    state = {
        postList: [
            // {
            //     name: 'Fabion Delishaj',
            //     postContent: 'post',
            //     time: 'Undefined',
            //     like: 0,
            //     isLiked: false,
            //     isShareLiked: false,
            //     comments: [],
            //     share: 0,
            //     view: '50k'
            // }

            // {
            //     name: 'Fabion Delishaj',
            //     postContent: 'post',
            //     time: 'Undefined',
            //     like: 0,
            //     isLiked: false,
            //     isShareLiked: false,
            //     comments: [],
            //     share: 0,
            //     view: '50k'
            // }
        ]
    }

    addPost = (post) => {
        this.setState( prevState => {
            return {
                postList: [
                    {
                        name: 'Fabion Delishaj',
                        postContent: post,
                        time: 'Undefined',
                        like: 0,
                        isLiked: false,
                        isShareLiked: false,
                        comments: [],
                        share: 0,
                        view: 0
                    },
                    ...prevState.postList
                ]
            };
        });
    }

    addComment = (comment, index) => {
        this.setState( prevState => ({
                comments: prevState.postList[index].comments.push({name: 'Fabion Delishaj', commentContent: comment})
        }));
    }

    removeComment = (postID, commentID) => {
        let listComments = this.state.postList[postID].comments;
        listComments.splice(commentID, 1);
        this.setState( prevState => ({ comments: listComments }))
    }

    handleLikes = (value, isLiked, index) => {
        this.setState( prevState => ({
            like: prevState.postList[index].like += value,
            isLiked: prevState.postList[index].isLiked = !prevState.postList[index].isLiked
        }));
    }

    render() {
        return (
            <section className="app">
                <PostGenerator
                    addPost={ this.addPost }
                />

                <section className="main-section">
                    {this.state.postList.map( (post, index) =>
                        <Article
                            key={ index.toString() }
                            id={ index }
                            name={ post.name }
                            postContent={ post.postContent }
                            time={ post.time }
                            like={ post.like }
                            comments={ post.comments }
                            share={ post.share }
                            view={ post.view }
                            isLiked={ post.isLiked }
                            addComment={ this.addComment }
                            removeComment={ this.removeComment }
                            handleLikes={ this.handleLikes }
                        />
                    )}
                </section>
            </section>
        );
    }
}

export default App;
