// src/components/Blog.jsx
import React from 'react';
import { AppWrap } from "../../wrapper";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog section!</p>
    </div>
  );
};

// export default Blog;
export default AppWrap(Blog, "blog");
