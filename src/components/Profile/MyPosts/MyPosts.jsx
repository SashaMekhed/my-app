import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={classes.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>

  )
}

export default MyPosts;