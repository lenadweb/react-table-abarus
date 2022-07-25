import React, { FC } from 'react';
import styles from './Alert.module.css';

interface IAlert {
    caption: string;
}

const Alert:FC<IAlert> = ({ caption = '' }) => (
    <div className={styles.alert}>
        {caption}
    </div>
);

export default Alert;
