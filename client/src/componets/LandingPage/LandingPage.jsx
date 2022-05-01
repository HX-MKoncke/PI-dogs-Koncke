import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css'

export default function LandingPage(){
    return(
        <Fragment>
            <div className={styles.hero}>
                <h1 className={styles.title}>SECRET SOCIETY OF DOGS</h1>
                <Link to='/home'>
                    <button className={styles.bubblyButton}>Ok, you can come in</button>
                </Link>
                
                <img className={styles.video_bk} src="../../assets/bkg" alt="" />
            </div>
        </Fragment>
    )
}
