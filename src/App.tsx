import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './hooks/usePageNumber';
import { Post } from './api/types';
import Posts from './components/Posts/Posts';
import { useDebounce } from './hooks/useDebounce';
import SearchInput from './components/SearchInput/SearchInput';
import JsonPlaceholderApi from './api/api';
import styles from './App.module.css';
import Spinner from './components/Spinner/Spinner';

// variant of filtering posts
// const searchByKeywords = (post: Post, keyword: string) => {
//     if (Object.values(post).some((item) => item.toString().includes(keyword))) return true;
//     return false;
// };

function App() {
    const pageNumber = usePageNumber();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebounce(inputValue, 200);
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            setLoading(true);
            const result = await JsonPlaceholderApi.getPosts();
            setLoading(false);
            setPosts(result);
        }());
    }, []);
    const onPageChange = useCallback((nPage: number) => {
        navigate(`/page/${nPage + 1}`);
    }, []);

    return (
        <div className={styles.wrapper}>
            <SearchInput value={inputValue} onChange={setInputValue} />
            {
                isLoading ? <Spinner /> : (
                    <Posts
                        posts={posts}
                        initialPage={pageNumber}
                        onPageChange={onPageChange}
                        filterQuery={debouncedInputValue}
                    />
                )
            }
        </div>
    );
}

export default App;
