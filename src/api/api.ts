import { Post } from './types';

const sleep = (ms: number) => new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
});

class JsonPlaceholderApi {
    async getPosts(): Promise<Post[]> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            await sleep(1000);
            return response.json();
        } catch (e) {
            return [];
        }
    }
}

export default new JsonPlaceholderApi();
