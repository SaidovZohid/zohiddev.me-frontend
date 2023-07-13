import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404">
      <h4>404</h4>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
      />
      <div>
        <h6>Look like you're lost</h6>
        <p>the page you are looking for not avaible!</p>
        <Link to={"/"}>
          <button>Go to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
