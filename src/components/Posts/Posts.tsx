import React, { FC, memo, useMemo } from 'react';
import { Column } from 'react-table';
import { Post } from '../../api/types';
import FilterTable from '../FilterTable/FilterTable';
import styles from './Posts.module.css';
import Alert from '../Alert/Alert';

interface IPosts {
    posts: Post[];
    initialPage: number;
    filterQuery?: string;
    onPageChange: (nPage: number)=> void
}

const Posts:FC<IPosts> = memo(({ posts, filterQuery = '', initialPage, onPageChange }) => {
    const isSomethingWentWrong = !posts?.length;
    const rows = useMemo(() => posts.map(({ id, title, body }) => ({
        id,
        title,
        body,
    })) || [], [posts]);

    const columns = useMemo<Column[]>(() => [
        {
            Header: 'ID',
            accessor: 'id' as const,
        },
        {
            Header: 'Заголовок',
            accessor: 'title' as const,
        },
        {
            Header: 'Описание',
            accessor: 'body' as const,
        },
    ], [posts]);

    if (isSomethingWentWrong) return <Alert caption="Что-то пошло не так" />;

    return (
        <div className={styles.wrapper}>
            <FilterTable
                initialState={{
                    sortBy: [
                        {
                            id: 'id',
                            desc: false,
                        },
                    ],
                    pageIndex: initialPage - 1,
                    pageSize: 10,
                }}
                filterQuery={filterQuery}
                onPageChange={onPageChange}
                columns={columns}
                data={rows}
            />
        </div>
    );
});

export default Posts;
