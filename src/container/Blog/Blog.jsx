import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppWrap } from "../../wrapper";
import './Blog.scss';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/socialMedia.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>Welcome to the blog section! Here you can find interesting articles and updates.</p>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
          <h3>{post.subtitle}</h3>
          <p><strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default AppWrap(Blog, "blog");
