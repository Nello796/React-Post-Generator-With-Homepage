import React from "react";
import ProfilePicture from "../../profile-picture.jpg";

class MainWrapPost extends React.Component {

    handleLike = () =>
        this.props.isLiked
            ? this.props.handleLikes(-1, false, this.props.id)
            : this.props.handleLikes(+1, true, this.props.id)

    render() {
        return (
            <div className="main-wrap-post">
                <div className="account-info">
                    <div>
                        <img
                            src={ ProfilePicture }
                            className="profile-picture"
                            alt="Profile"
                        />
                    </div>

                    <div>
                        <h3><a>{this.props.name}</a></h3>
                        <small>{this.props.time} . <i className="fas fa-globe-africa"></i></small>
                    </div>
                </div>

                <div className="post-content">
                    <pre>{this.props.postContent}</pre>
                </div>

                <div className="post-info">
                    <div>
                        {(this.props.like !== 0)
                            ? <div><i className="fas fa-thumbs-up"></i><p>{this.props.like}</p></div>
                            : null}
                    </div>

                    <div>
                        <p>{this.props.comments.length} Comments</p>
                        <p>{this.props.share} Shares</p>
                        <p>{this.props.view} Views</p>
                    </div>
                </div>

                <div className="menu-interaction">
                    <div
                        onClick={ this.handleLike }
                        className={ (this.props.isLiked ? "blue_color" : null) }>
                        <i className="far fa-thumbs-up"></i>
                        Like
                    </div>

                    <div><i className="far fa-comment-alt"></i> Comment</div>
                    <div><i className="fas fa-share"></i> Share</div>
                </div>
            </div>
        );
    }
}

export default MainWrapPost;