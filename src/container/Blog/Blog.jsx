import React, { useState, useEffect } from 'react';
import { AppWrap } from "../../wrapper";
import './Blog.scss';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/socialMedia.json')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
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
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <h3>{post.subtitle}</h3>
          <p><strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
          <div className="blog-content">
            {post.content.map((content, idx) => {
              if (content.type === 'paragraph') {
                return <p key={idx}>{content.text}</p>;
              } else if (content.type === 'header') {
                return <h4 key={idx}>{content.text}</h4>;
              } else if (content.type === 'list') {
                return (
                  <ul key={idx}>
                    {content.items.map((item, listIdx) => (
                      <li key={listIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
          <div className="blog-images">
            {post.images.map((image, imgIdx) => (
              <img key={imgIdx} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppWrap(Blog, "blog");
