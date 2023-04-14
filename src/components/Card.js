import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card col-6 col-md-3 col-sm-4 mb-3">
        <img src={item.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">Photo ID: {item.id}</p>
          <p className="card-text">AlbumId ID: {item.albumId}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">URL: {item.url}</li>
        </ul>
      </div>
    </>
  );
};

export default Card;
