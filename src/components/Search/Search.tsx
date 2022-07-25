import React, { FC } from 'react';
import { Post } from '../../api/types';

interface ISearch {
    setResult: (values: Post[]) => void;
}

const Search:FC<ISearch> = ({ setResult }) => <div />;

export default Search;
