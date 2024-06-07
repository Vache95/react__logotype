import type { PostsModel } from '@types'



interface PostCardProps extends PostsModel {
  onClick: (_val?: { title: string, text: string }) => void
}

const PostCard: React.FC<PostCardProps> = (
  {
    img,
    img_2x,
    tags,
    title,
    autor,
    date,
    views,
    text,
    onClick
  }
) => (

  <div className="posts__item" onClick={() => onClick({ title, text })}>
    <div className="posts__item-img">
      <img src={img} srcSet={img_2x} alt={tags} />
    </div>
    <span>{tags}</span>
    <h1>{title}</h1>
    <p><span>{autor} </span> &#183; {date} &#183; {views} views</p>
    <p className='posts__item-text'>{text}</p>
  </div>
)


export default PostCard