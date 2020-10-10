import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>First Assignment</h1>
      <ul className="headerUL">
        <li>Home</li>
        <li>About</li>
        <li>Resources</li>
      </ul>
    </header>
  );
};

export default Header;
