import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
export default function DogCard({ id, name, weight, image, temperament }) {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img src={image} />
          </div>
          <div className={styles.contentBx}>
            <div className={styles.content}>
              <h1>{name}</h1>
              <h3>{weight} kg</h3>
              <p>{temperament}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
