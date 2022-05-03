import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";

export default function LandingPage() {
  return (
    <Fragment>
      <div className={styles.landingPage}>
        <div className={styles.container}>
          <div className={styles.box}>
            <span style={{ "--i": "1" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "2" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "3" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "4" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "5" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "6" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "7" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "8" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "9" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "10" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "11" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "12" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "13" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "14" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "15" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
            <span style={{ "--i": "16" }}>
              <i>DOGS</i> FULLSTACK <i>PROJECT</i>
            </span>
          </div>
        </div>

        <div>
          <a href="/home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            lets go!
          </a>
        </div>
      </div>
    </Fragment>
  );
}
