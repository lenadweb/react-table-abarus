import React from 'react';
import styles from './Spinner.module.css';
import SpinnerIcon from '../../Icons/SpinnerIcon';

const Spinner = () => (
    <div className={styles.wrapper}>
        <div className={styles.icon}>
            <SpinnerIcon />
        </div>
    </div>
);

export default Spinner;
