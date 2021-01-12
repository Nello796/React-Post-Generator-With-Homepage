import React from "react";

import TextareaAutosize from 'react-autosize-textarea';
import ProfilePicture from '../../assets/profile-picture.jpg';

import './postGenerator.scss';

class PostGenerator extends React.Component {

    state = {
        value: ''
    }

    handleChangeTextarea = (e) => {
        this.setState({value: e.target.value});
        (this.state.value.length >= 50)
            ? document.getElementById('test').style.fontSize = '1.6rem'
            : document.getElementById('test').style.fontSize = '2rem';
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.addPost(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className="post-generator-wrap">
                <form onSubmit={ this.handleSubmit }>
                    <div className="insert-post-section">
                        <div><img src={ ProfilePicture } className="profile-picture" alt="Profile"/></div>

                        <div>
                            <TextareaAutosize
                                id='test'
                                className="text-area-autosize-post"
                                name="text-post"
                                placeholder="What are you thinking, Fabion ?"
                                value={ this.state.value }
                                onChange={ this.handleChangeTextarea }
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="btn-post">Post</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default PostGenerator;
