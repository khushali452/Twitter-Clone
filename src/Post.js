import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"/>
            </div>
            <div className="post__body">
                
            </div>
        </div>
    )
}

export default Post
