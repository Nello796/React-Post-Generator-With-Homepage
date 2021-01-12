import React from "react";

import MainWrapPost from "./mainWrapPost/MainWrapPost";
import MainWrapComments from './mainWrapComments/MainWrapComments';

import './article.scss';

const Article = (props) => {
    return (
        <article className="article">
            <MainWrapPost
                id={ props.id }
                name={ props.name }
                time={ props.time }
                postContent={ props.postContent }
                like={ props.like }
                comments={ props.comments }
                share={ props.share }
                view={ props.view }
                isLiked={ props.isLiked }
                handleLikes={ props.handleLikes }
            />

            <MainWrapComments
                comments={ props.comments }
                addComment={ props.addComment }
                removeComment={ props.removeComment }
                id={ props.id }
            />
        </article>
    );
}

export default Article;