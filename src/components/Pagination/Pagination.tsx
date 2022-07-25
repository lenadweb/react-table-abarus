import React, { FC } from 'react';
import styles from './Pagination.module.css';

interface IPagination {
    canPreviousPage: boolean;
    canNextPage: boolean;
    numberOfPages: number;
    pageIndex: number;
    previousPage: () => void;
    nextPage: () => void;
    gotoPage: (nPage: number) => void;
}

const Pagination:FC<IPagination> = ({ canPreviousPage, nextPage, previousPage, canNextPage, numberOfPages, gotoPage, pageIndex }) => (
    <div className={styles.wrapper}>
        <button className={styles.button} type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
            Назад
        </button>
        <div>
            {
                Array.from({
                    length: numberOfPages,
                }).map((_, index) => (
                    <button key={index} className={styles.item} type="button" onClick={() => gotoPage(index)} disabled={index === pageIndex}>
                        {
                            index + 1
                        }
                    </button>
                ))
            }
        </div>
        <button className={styles.button} type="button" onClick={() => nextPage()} disabled={!canNextPage}>
            Далее
        </button>
    </div>
);

export default Pagination;
