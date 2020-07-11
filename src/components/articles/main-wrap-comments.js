import React from "react";
import Comments from "./comments";
import ProfilePicture from "../../profile-picture.jpg";
import TextareaAutosize from "react-autosize-textarea";

class MainWrapComments extends React.Component {

    state = {
        value: ''
    }

    handleComment = (e) => {
        this.setState({ value: e.target.value });
    }

    handleKeyPress = (e) => {

        if (e.key === 'Enter')
            e.preventDefault();

        if (e.key === 'Enter' && this.state.value !== '') {

            this.props.addComment(this.state.value, this.props.id);
            this.setState(prevState => ({value: ''}));
        }
    }

    render() {
        return (
            <div className="main-wrap-comments">
                {this.props.comments.map((listComments, index) =>
                    <Comments
                        key={ index.toString() }
                        id={ index }
                        postID={ this.props.id }
                        comments={ listComments }
                        removeComment={ this.props.removeComment }
                    />
                )}

                <form className="add-comment-form">
                    <div>
                        <img
                            src={ ProfilePicture }
                            className="profile-picture-comments"
                            alt="Profile"/>

                        <TextareaAutosize
                            className="text-area-autosize-comment"
                            onChange={ this.handleComment }
                            onKeyPress={ this.handleKeyPress }
                            value={ this.state.value }
                            placeholder="Write a comment..."
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default MainWrapComments;