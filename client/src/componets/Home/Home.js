import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import DogCard from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import NavBar from "./NavBar/NavBar";
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
  const [dogsPerPage] = useState(8);
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
    <div className="mainContainer">
      {/* <div className="REFRESH">
        <h4 className="REFRESH"> Find by filters:</h4>
        <div
          className="REFRESH"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <span className="material-icons refresh">loop</span>
        </div>
      </div> */}

      {/* <div>
        <NavBar />
      </div> */}

      {/* <div>
        <div className="SELECT">
          <h5 className="SELECT">Order Dogs</h5>
          <select onChange={handleSort}>
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="AscendingName">A - Z</option>
            <option value="DescendingName">Z - A</option>
            <option value="AscendingWeight">Chubby Dogs</option>
            <option value="DescendingWeight">Skinny Dogs</option>
          </select>
        </div>

        <div className="SELECT">
          <h5 className="SELECT">Filter by source</h5>
          <select
            onChange={(e) => {
              handleFilterCreated(e);
            }}
          >
            <option defaultValue value="all">
              All Sources 🐶
            </option>
            <option value="created">Yours 🐶</option>
            <option value="inDB">dbase 🐶</option>
          </select>
        </div>

        <div className="SELECT">
          <h5 className="SELECT">Filter by temperament</h5>
          <select onChange={handleFilteredByTemp}>
            <option value="all">All Temperaments</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
      </div> */}

      <div className="">
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
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
              temperaments={el.temperaments}
            />
          );
        })}
      </div>

      {/* <div className="FORM">
        <h5 className="FORM">Add a Woof</h5>
        <div className="FORM">
          <Link to="/newDog/" className="FORM">
            <span className="material-icons">add_circle</span>
            <span className="FORM">Add your Woof</span>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
