import { React, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  // orderByName,
  // orderByWeight,
  orderDogs,
  filterCreated,
} from "../../redux/actions/index";
import styles from "./SideBar.module.css";
// const { setCurrentPage } = require("../DogArea/DogArea");

export default function SideBar() {
  // const [, /*refreshState*/ setRefreshState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );

  useEffect(() => {
    // dispatch(getDogs());
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
    // setRefreshState((Mandela) => !Mandela);
  }
  // function handleClickOrder(e) {
  //   e.preventDefault();
  //   dispatch(orderByName(e.target.value));
  // }
  // function handleClickOrderWeight(e) {
  //   e.preventDefault();
  //   dispatch(orderByWeight(e.target.value));
  // }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleFilteredByTemp(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  return (
    <Fragment>
      <div className={styles.side}>
        <div className={styles.sideBarHeader}>
          <h4 className={styles.header}> Find by filters:</h4>
          <div
            className={styles.tooltip}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <span className="material-icons refresh">loop</span>
          </div>
        </div>
        <hr />
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Order Dogs</h5>
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
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by source</h5>
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
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by temperament</h5>
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

        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Add a Woof</h5>
          <div className={styles.addDog}>
            <Link to="/newDog/" className={styles.tooltip}>
              <span className="material-icons">add_circle</span>
              <span className={styles.tooltiptext}>Add your Woof</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
