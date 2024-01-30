// NotFound.js
import React from "react";
import "./NotFound.less";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might not exist.😢</p>
      {/* Add a link to navigate back to the home page */}
      <div className="navigate">
        <span className="go-home" onClick={() => navigate("/")}>
          Go to Home
        </span>
        &nbsp;&nbsp;
        <span>or</span>
        &nbsp;&nbsp;
        <span className="back" onClick={() => navigate(-1)}>
          Back
        </span>
      </div>
    </div>
  );
};

export default NotFound;
