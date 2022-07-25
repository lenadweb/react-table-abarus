import { useParams } from 'react-router';

export function usePageNumber(): number {
    const { pageIndex } = useParams();
    return pageIndex ? Number(pageIndex) : 1;
}
