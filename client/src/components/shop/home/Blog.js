import React from "react";
import Layout from "../layout";
import './blog.css';
import img from "./contact.jpg"; 
 

const BlogContent = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  return (
    <div style={backgroundImageStyle}>
      <header className="blog-header" >
        <h1>Welcome to My Blog</h1>
        <p>Discover the latest news and articles</p>
      </header>
    </div>
  );
};

const Blog = (props) => {
  return <Layout><BlogContent /></Layout>;
};

export default Blog;
