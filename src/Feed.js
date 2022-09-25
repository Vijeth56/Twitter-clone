import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import { PostAdd } from "@mui/icons-material";
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h1>Home</h1>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* Posts */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            img={post.img}
          />
        ))}
      </FlipMove>
      
    </div>
  );
}

export default Feed;
