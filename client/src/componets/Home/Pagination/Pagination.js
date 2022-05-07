import styles from "./Pagination.module.css";

export default function Pagination({
  dogsPerPage,
  allDogs,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section>
      <ul className={styles.pagination}>
        <li
          className={`${styles.btn} ${styles.prev}`}
          onClick={() => pagination(currentPage - 1)}
        >
          ⪻ Prev
        </li>

        {pageNumbers &&
          pageNumbers.map((number) => (
            <li
              key={number}
              className={`${styles.btn} ${
                number === currentPage ? styles.active : styles.inactive
              }`}
              onClick={() => pagination(number)}
            >
              {number}
            </li>
          ))}

        <li
          className={`${styles.btn} ${styles.next}`}
          onClick={() => pagination(currentPage + 1)}
        >
          Next ⪼
        </li>
      </ul>
    </section>
  );
}
