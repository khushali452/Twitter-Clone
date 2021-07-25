import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

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
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Khushali Vasani</h3><span>< VerifiedUserIcon className="post__badge" /></span>
                    </div>
                    <div className="post__headerDescription">
                        <p>Hey there!!</p>
                    </div>
                    <img src="http://www.reactiongifs.com/r/cheering_minions.gif"></img>
                <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Post
