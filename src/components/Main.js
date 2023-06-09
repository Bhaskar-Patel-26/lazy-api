import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [itemList, setitemList] = useState([]);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
  useEffect(() => {
    getData(url);
  }, [url]);

  const getData = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Can Not Fetch Data From This Resource");
        } else {
          toast.success("Data loaded successfully");
          return response.json();
        }
      })
      .then((data) => setitemList(data))
      .catch((error) => {
        setError(error.message);
      });
  };

  if (error !== null) {
    toast.warning(error);
  }
  if (error === null) {
    return (
      <div className="container-fluid">
        <div className="item__list">
          <div className="list__cards row">
            {itemList.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }
};

export default Main;
