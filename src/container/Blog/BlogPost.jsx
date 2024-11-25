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
      <h1>{post.title}</h1>
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
  );
};

export default AppWrap(BlogPost, "blog-post");