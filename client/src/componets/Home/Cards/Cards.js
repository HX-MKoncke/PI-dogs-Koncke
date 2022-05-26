import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

export default function DogCard({
  id,
  name,
  weight_min,
  weight_max,
  image,
  temperament,
  temperaments,
}) {
  if (!temperaments) {
    return (
      <Link
        to={"/home/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img className={styles.img} src={image} alt="" />
            </div>

            <div className={styles.contentBx}>
              <div className={styles.content}>
                <h1>{name}</h1>
                <h3>
                  {weight_min} - {weight_max} kg
                </h3>
                <p>{temperament}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        to={"/home/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img className={styles.img} src={image} alt="" />
            </div>

            <div className={styles.contentBx}>
              <div className={styles.content}>
                <h1>{name}</h1>
                <h3>
                  {weight_min} - {weight_max} kg
                </h3>
                {temperaments ? (
                  <p>{temperaments.map((temp) => `${temp.name}`).join(", ")}</p>
                ) : (
                  <h2>Not found</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
