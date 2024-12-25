// Header.jsx
import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.header}>
      <h1>My Product Store</h1>
      <nav>
        <ul className={Styles.navList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
