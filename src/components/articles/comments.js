import React from "react";
import ProfilePicture from "../../profile-picture.jpg";
import '../../style/comments.scss';

class Comments extends React.Component {

    state = {
        comment_tool_menu: ''
    }

    toggleCommentToolMenu = () => {

        if (this.state.comment_tool_menu.length === 0) {

            this.setState(prevState => ({
                comment_tool_menu: prevState.comment_tool_menu = 'show-comment-tool-menu'
            }));
        } else {

            this.setState(prevState => ({
                comment_tool_menu: prevState.comment_tool_menu = ''
            }));
        }
    }

    render() {
        return (
            <div className="comment-wrap">
                <div><img src={ProfilePicture} className="profile-picture-comments" alt="Profile"/></div>

                <div className="comment">
                    <div>
                    <pre>
                        <span>{this.props.comments.name}</span>
                        {this.props.comments.commentContent}
                    </pre>

                        <div className="comment-tool-menu-wrap">
                            <i
                                id="btn-open-comment-tool-menu"
                                className="fas fa-ellipsis-h"
                                onClick={ this.toggleCommentToolMenu }
                            ></i>

                            <div id="comment-tool-menu" className={ this.state.comment_tool_menu }>
                                <p><i className="fas fa-pen"></i> Edit</p>
                                <p onClick={ () => this.props.removeComment(this.props.postID, this.props.id) } ><i className="fas fa-trash"></i> Delete</p>
                            </div>
                        </div>
                    </div>

                    <div className="comment-menu-option">
                        <p>Like</p>
                        <span>.</span>
                        <p>Comment</p>
                        <span> . </span>
                        <span>Undefined</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;