import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
export default function DogCard({ id, name, weight, image, temperament }) {
  return (
    <Link
      to={"/home/" + id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img className={styles.img} src={image} />
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
    </Link>
  );
}
