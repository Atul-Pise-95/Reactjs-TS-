import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./thunkActionCreators";
import { selectPost } from "./PostSlice";

const Post = ({ id, title, body }) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: 5,
      margin: 5,
      borderRadius: 5,
      boxShadow: "0 0 3px 2px #999",
    }}
  >
    <h3>
      {id}-{title}
    </h3>
    <p>{body}</p>
  </div>
);

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h2>Post List</h2>
      {Array.isArray(posts) &&
        posts.map((postObj) => <Post key={postObj.id} {...postObj} />)}
    </>
  );
};

export default PostList;
