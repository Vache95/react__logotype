import { lazy, useRef } from 'react'
import Header from 'components/Header'
import Menu from 'components/Menu'
import Posts from 'components/Posts'
import useModal from 'hooks/useModal'
import { usePosts } from 'hooks/usePosts'

const Modal = lazy(() => import(/* webpackChunkName: "Modal" */ 'components/Modal'));

const HomePage = () => {

  const { posts, filterPosts, loading } = usePosts();
  const { isShowing, toggle, data } = useModal();
  const wrapperRef = useRef(null);

  return (
    <div className='wrapper'>
        <div className="wrapper-container" ref={wrapperRef}>
            <Header filterPosts={filterPosts} />
            <Menu wrapperRef={wrapperRef} />
            <div className="wrapper__container">
              <Posts
                posts={posts}
                loading={loading}
                handleModal={toggle}
               />
            </div>
        </div>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          title={data?.title}
        >
          <p>{data?.text}</p>
        </Modal>
    </div>
  );
}

export default HomePage;