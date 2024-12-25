// src/pages/Blog.js
import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from an API or database
    const fetchPosts = async () => {
      // Assuming we have a blogService to fetch blog data
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={`/blog/${post.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
