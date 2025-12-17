import React from "react";
import { Link, useNavigate } from "react-router";
import styles from "./home-page.module.css";
import { normalizedRestaurants } from "../../service/normalized-mock";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Link to="/" className={styles.link}>
          Главная
        </Link>
        <button onClick={() => navigate("/about")} className={styles.button}>
          О нас
        </button>
      </div>

      <h1>Рестораны</h1>

      <ul className={styles.list}>
        {normalizedRestaurants.map((restaurant) => (
          <li key={restaurant.id} className={styles.item}>
            <span>{restaurant.name}</span>
            <Link
              to={`/restaurants/${restaurant.id}/dish`}
              className={styles.details}
            >
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
