import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper'; // Assuming they are in the wrapper directory
import './Blog.scss';

const Blog = () => {
  return (
    <div>
      <h1 className="head-text">Welcome to the Blog Page!</h1>
      <p>Here is the blog content...</p>
    </div>
  );
};

// Exporting with AppWrap and MotionWrap for consistency
export default AppWrap(
  MotionWrap(Blog, 'app__blog'),
  'blog',
  'app__whitebg'
);
