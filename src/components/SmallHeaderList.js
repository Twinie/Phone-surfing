import React from "react";
import { Link } from "react-router-dom";

const SmallHeaderList = ({ addOpen }) => {
  return (
    <div>
      <ul className={addOpen ? "list-pack-open" : "small-list-pack"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>
    </div>
  );
};

export default SmallHeaderList;
