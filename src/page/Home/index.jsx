import { useRef } from 'react'
import Header from 'components/Header'
import Menu from 'components/Menu'
import Posts from 'components/Posts'
import { usePosts } from 'hooks/usePosts'


const HomePage = () => {

  const { posts, filterPosts, loading } = usePosts();
  const wrapperRef = useRef(null);

  return (
    <div className='wrapper'>
        <div className="wrapper-container" ref={wrapperRef}>
            <Header filterPosts={filterPosts} />
            <Menu wrapperRef={wrapperRef} />
            <div className="wrapper__container">
              <Posts posts={posts} loading={loading} />
            </div>
        </div>
    </div>
  );
}

export default HomePage;