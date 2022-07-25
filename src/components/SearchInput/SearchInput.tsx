import React, { ChangeEvent, FC, memo } from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../Icons/SearchIcon';

interface ISearchInput {
    value: string;
    onChange: (nValue: string) => void;
}

const SearchInput:FC<ISearchInput> = memo(({ value, onChange }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <input className={styles.input} value={value} placeholder="Поиск" onChange={onChangeHandler} />
            <div className={styles.icon}>
                <SearchIcon />
            </div>
        </div>
    );
});

export default SearchInput;
