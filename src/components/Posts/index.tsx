import SkeletonComponent from '../ui/Skeleton/index'
import PostCard from './PostCard'
import type { PostsModel } from '@types';

import './styles.scss';



interface PostsProps {
  posts: PostsModel[],
  loading: boolean,
  handleModal: (_val?: { title: string, text: string }) => void
}

const Posts: React.FC<PostsProps> = ({ posts, loading, handleModal }) => (
  <div className='posts'>
    <SkeletonComponent count={3} className='skeleton' isLoading={loading} />
    {
      !!posts?.length && !loading ? posts?.map(({ img, img_2x, tags, title, autor, date, views, text }, index) => (
        <PostCard
          key={index}
          img={img}
          img_2x={img_2x}
          tags={tags}
          title={title}
          autor={autor}
          date={date}
          views={views}
          text={text}
          onClick={handleModal}
        />
      )) : <h2>Noth Found</h2>
    }
  </div>
)


export default Posts