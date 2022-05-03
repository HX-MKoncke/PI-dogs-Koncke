import React, { Fragment } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <Fragment>
      <div className="search">
        <div className={styles.TitleAndSearchBar}>
          <div className={styles.logoAndTitle}>
            <Link to="/home">
              <img
                id="logoHenry"
                alt="a happy dog icon"
                className={styles.logo}
              />
            </Link>
            <div>
              <h1>Woof</h1>
              <p>The dog's page</p>
            </div>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className={styles.aboutNavButton}>
          <Link to="/about">About</Link>
        </div>
      </div>
    </Fragment>
  );
}
