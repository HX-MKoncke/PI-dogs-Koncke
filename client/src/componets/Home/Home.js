import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import DogCard from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import {
  getDogs,
  getTemperamentsList,
  orderDogs,
  filterCreated,
  filterDogsByTemperament,
} from "../../redux/actions";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(9);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [, /*refreshState*/ setRefreshState] = useState(true);

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentsList());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderDogs(e.target.value));
    setCurrentPage(1);
    setRefreshState((prevState) => !prevState);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
    setRefreshState((prevState) => !prevState);
  }

  function handleFilteredByTemp(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
    setCurrentPage(1);
    setRefreshState((prevState) => !prevState);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navBar}>
        <NavBar />

        <SearchBar />
      </div>

      <div className={styles.filters_orders}>
        <div className={styles.select}>
          <select onChange={handleSort}>
            <option defaultValue value="all" hidden>
              Order by...
            </option>
            <option value="AscendingName">A - Z</option>
            <option value="DescendingName">Z - A</option>
            <option value="AscendingWeight">Chubby Dogs</option>
            <option value="DescendingWeight">Skinny Dogs</option>
          </select>
        </div>

        <div className={styles.select}>
          <select
            onChange={(e) => {
              handleFilterCreated(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Source...
            </option>
            <option value="Existing">Existing dogs</option>
            <option value="Created">Yours puppys</option>
          </select>
        </div>

        <div className={styles.select}>
          <select onChange={handleFilteredByTemp}>
            <option value="all">Filter by temp...</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className={styles.resetBtn}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/89/89940.png" />
        </div>
      </div>

      <div className={styles.cardArea}>
        {currentDogs.map((el) => {
          return (
            <DogCard
              key={el.id}
              id={el.id}
              name={el.name}
              weight={el.weight.metric}
              image={el.image}
              temperament={el.temperament}
            />
          );
        })}
      </div>

      <div className="">
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
