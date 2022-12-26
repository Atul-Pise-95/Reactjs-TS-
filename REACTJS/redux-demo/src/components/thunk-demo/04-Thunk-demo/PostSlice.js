import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "Posts",
  initialState: [],
  reducers: {
    // addPosts: (state, { payload }) => [...state, ...payload],
    addPosts: (state, { payload }) => [...payload],
  },
});

export const { addPosts } = PostSlice.actions;
export const selectPost = (state) => state.posts;
export default PostSlice.reducer;
