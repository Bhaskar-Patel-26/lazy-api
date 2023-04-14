import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="card col-6 col-md-3 col-sm-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">User ID: {blog.userId}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Post: {blog.body}</li>
        </ul>
      </div>
    </>
  );
};

export default BlogCard;
