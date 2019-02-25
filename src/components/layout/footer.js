import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <div className={styles.footer}>
    <div className={styles.links} >
      <ul>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
    <div className={styles.copy}>{siteTitle} {new Date().getFullYear()}</div>
  </div>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
