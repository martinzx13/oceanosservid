import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppWrap } from "../../wrapper";
import './Blog.scss';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/socialMedia.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.find(p => p.id === parseInt(id));
        setPost(foundPost);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog__title">{post.title}</h1>
      <h3 className="blog__subtitle">{post.subtitle}</h3>
      <p className="blog__meta"><strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
      <div className="blog-content">
        {post.content.map((content, idx) => {
          if (content.type === 'paragraph') {
            return <p key={idx} className="blog__content">{content.text}</p>;
          } else if (content.type === 'header') {
            return <h4 key={idx} className="blog__content">{content.text}</h4>;
          } else if (content.type === 'list') {
            return (
              <ul key={idx} className="blog__content">
                {content.items.map((item, listIdx) => (
                  <li key={listIdx}>{item}</li>
                ))}
              </ul>
            );
          } else if (content.type === 'image') {
            return <img key={idx} src={content.src} alt={content.alt} className="blog__image" />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default AppWrap(BlogPost, "blog-post");