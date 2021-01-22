import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Oops...The page you're looking for doesn't exist!!!</h2>
      <Link to="/">Return to Home...</Link>
    </div>
  );
};

export default NotFound;
