// Footer.jsx
import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p>© 2024 My Product Store. All rights reserved.</p>
      <ul className={Styles.socialLinks}>
        <li><a href="#facebook">Facebook</a></li>
        <li><a href="#twitter">Twitter</a></li>
        <li><a href="#instagram">Instagram</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
