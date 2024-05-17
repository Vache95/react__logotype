
import { lazy } from 'react';
import SkeletonComponent from 'components/ui/Skeleton'
import useModal from 'hooks/useModal'
import './styles.scss';

import PostCard from './PostCard'

const Modal = lazy(() => import(/* webpackChunkName: "Modal" */ 'components/Modal'));

const Posts = ({ posts,loading }) => {

  const { isShowing, toggle, data } = useModal();

  return (
    <div className='posts'>
          {loading ?
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonComponent key={index} styles={{ opacity: '0.7' }} className='skeleton' />
            )) 
            :
            !!posts?.length ? posts?.map(({img,img_2x,tags,title,autor,date,views,text},index) => (
                <PostCard
                  key={index}
                  posts={posts}
                  img={img}
                  img_2x={img_2x}
                  tags={tags}
                  title={title}
                  autor={autor}
                  date={date}
                  views={views}
                  text={text}
                  onClick={toggle}
                />
              )) : <h2>Noth Found</h2>
          }
        <Modal
          isShowing={isShowing}
          hide={toggle}
          title={data?.title}
        >
          <p>{data?.text}</p>
        </Modal>
    </div>
  )
}

export default Posts