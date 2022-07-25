import React, { FC, useEffect } from 'react';
import { Column, TableState, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import styles from './FilterTable.module.css';
import ArrowIcon from '../../Icons/ArrowIcon';
import Pagination from '../Pagination/Pagination';
import Alert from '../Alert/Alert';

interface IStaticTable {
    columns: ReadonlyArray<Column>;
    data: any[];
    initialState?: Partial<TableState>;
    filterQuery: string;
    onPageChange: (nPage: number)=> void
}

const FilterTable:FC<IStaticTable> = ({ columns, data, filterQuery, initialState = {}, onPageChange }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        page,
        canPreviousPage,
        setGlobalFilter,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    );

    // filter by keywords and reset to first page
    useEffect(() => {
        onPageChange(0);
        setGlobalFilter(filterQuery);
    }, [filterQuery]);
    // update url
    useEffect(() => {
        onPageChange(pageIndex);
    }, [pageIndex]);

    if (!rows.length) {
        return <Alert caption="Ничего не найдено" />;
    }

    return (
        <div className={styles.wrapper}>
            <table {...getTableProps()} className={styles.table}>
                <thead className={styles.head}>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={styles.cell}
                                >
                                    <div className={styles.sortContainer}>
                                        <div className={styles.headSortCell}>
                                            <span className={styles.headCell}>{column.render('Header')}</span>
                                            {column.isSorted
                                                && (
                                                    <div className={styles.arrowSort}>
                                                        <ArrowIcon isDown={!!column.isSortedDesc} />
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className={styles.body}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className={styles.row}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className={styles.cell}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {
                pageOptions.length > 0 && (
                    <Pagination
                        canPreviousPage={canPreviousPage}
                        canNextPage={canNextPage}
                        numberOfPages={pageOptions.length}
                        previousPage={previousPage}
                        pageIndex={pageIndex}
                        nextPage={nextPage}
                        gotoPage={gotoPage}
                    />
                )
            }
        </div>
    );
};

export default FilterTable;
