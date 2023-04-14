import React, { useEffect, useState } from "react";
import BlogCard from "../components/Card";

const Main = () => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    getData();
    console.log(blogList);
  }, [blogList]);

  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setBlogList(data));
  };

  return (
    <div className="container-fluid">
      <div className="item__list">
        <div className="list__cards row">
          {blogList.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
