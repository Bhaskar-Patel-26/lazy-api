import React from "react";

const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <p className="spinner-border"></p>
      <div>
        <h6 className="align-items-center">&nbsp; Your Contant is Loading</h6>
      </div>
    </div>
  );
};

export default Loading;
