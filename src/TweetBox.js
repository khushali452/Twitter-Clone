import {Button} from "@material-ui/core";
import React from 'react';
import "./TweetBox.css";
import { Avatar } from "@material-ui/core" ;

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://images.squarespace-cdn.com/content/v1/54b5c1d4e4b060f2e9699962/1431450724901-72CATYFOO297EU2PGFPQ/image-asset.jpeg"/>

                 <input placeholder="whats's happening?" type="text" />
                </div>
                <input className="tweetBox__inputImg"
                placeholder="Enter image URL"
                type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
