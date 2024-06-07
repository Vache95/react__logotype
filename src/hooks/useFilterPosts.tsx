import { useState, useCallback, useEffect } from 'react';
import type { PostsModel } from '@types';

export const useFilterPosts = (originalPosts: PostsModel[]) => {

    const [filteredPosts, setFilteredPosts] = useState<PostsModel[]>(originalPosts);

    const filterPosts = useCallback((value: string) => {
        const filtered = originalPosts.filter(post =>
            post.title.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [originalPosts]);

    useEffect(() => {
        setFilteredPosts(originalPosts);
    }, [originalPosts]);

    return { filteredPosts, filterPosts };
};
