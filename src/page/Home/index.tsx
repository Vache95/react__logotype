import { lazy, useRef } from "react"
import Header from 'components/Header'
import Menu from 'components/Menu'
import Posts from 'components/Posts'
import { useFilterPosts, useModal, usePosts } from 'hooks'

const Modal = lazy(() => import(/* webpackChunkName: "Modal" */ '../../components/ui/Modal'));

const HomePage = () => {

  const { posts: originalPosts, loading } = usePosts();
  const { filteredPosts, filterPosts } = useFilterPosts(originalPosts);
  const { isShowing, toggle, data } = useModal();
  const wrapperRef = useRef(null);


  return (
    <div className='wrapper'>
      <div className="wrapper-container" ref={wrapperRef}>
        <Header filterPosts={filterPosts} />
        <Menu wrapperRef={wrapperRef} />
        <div className="wrapper__container">
          <Posts
            posts={filteredPosts}
            loading={loading}
            handleModal={toggle}
          />
        </div>
      </div>

      <Modal
        isShowing={isShowing}
        hide={toggle}
        title={data?.title}
        className="postModal"
      >
        <p>{data?.text}</p>
      </Modal>
    </div>
  );
}

export default HomePage;