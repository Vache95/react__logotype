
import SkeletonComponent from 'components/ui/Skeleton'
import './styles.scss';

import PostCard from './PostCard'

const Posts = ({ posts, loading, handleModal }) => (
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
                  onClick={handleModal}
                />
              )) : <h2>Noth Found</h2>
          }
    </div>
  )


export default Posts