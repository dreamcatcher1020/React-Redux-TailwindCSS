import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex pb-3 my-2 space-x-6 border-b border-gray-100">
      <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">
        <Link to="/">
          <span className="pr-2" role="img" aria-label="home emoji">
            🏠
          </span>
          Home
        </Link>
      </li>
      <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">
        <Link to="/about">
          <span className="pr-2" role="img" aria-label="thinking emoji">
            🤔
          </span>
          About
        </Link>
      </li>
    </ul>
  );
}
