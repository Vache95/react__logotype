import { useCallback, useEffect, useState } from "react";
import { getPosts } from "services/postService";

import type { PostsModel } from "@types";


export const usePosts = () => {

    const [posts, setPosts] = useState<PostsModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchPosts = useCallback(async () => {
        setLoading(true)
        try {
            const response = await getPosts()
            if (response && response.data) {
                setPosts(response?.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])


    useEffect(() => {
        fetchPosts();
    }, []);// eslint-disable-line

    return { posts, loading };
};