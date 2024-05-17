import { useCallback, useEffect, useState } from "react";
import { getPosts } from "services/postService";

export const usePosts = () => {
    
    const [posts, setPosts] = useState([])
    const [loading,setLoading] = useState(false)
    const [originalPosts, setOriginalPosts] = useState([]);

    const fetchPosts = useCallback(async () => {
        setLoading(true)
       try {
            const response = await getPosts()
            if (response && response.data){
                setOriginalPosts(response.data);
                setPosts(response?.data)
            }  
       } catch (error) {
            console.log(error)
       }finally{
            setLoading(false)
       }
    },[])

    const filterPosts = useCallback((value) => {
        const filtered = originalPosts.filter(post => 
            post.title.toLowerCase().slice(0,value.length) === value.toLowerCase()
        );
        setPosts(filtered);
    },[originalPosts])

    useEffect(() => {
        fetchPosts();
    }, []);// eslint-disable-line

  return { posts, filterPosts,loading };
};