import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <p>
        Made with
        <FontAwesomeIcon className="heart-icon" icon="heart" fixedWidth />
        by Luke Balsiger
      </p>
    </footer>
  );
};

export default Footer;
