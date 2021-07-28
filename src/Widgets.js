import React from 'react';
import "./Widgets.css";
import{
    TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
}from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
        <h2>What's happening</h2></div>
        <TwitterTweetEmbed tweetId={"1392190690109526018"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="1225Khushali"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/khushali-vasani-1685231aa/"}
          options={{ text: "#reactjs is awesome", via: "1225Khushali" }}
        />
        </div>

        
    )
}

export default Widgets
