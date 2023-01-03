// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <div className="list-container">
      <div className="post-details">
        <h1 className="heading"> {title}</h1>
        <p className="desc"> {description}</p>
      </div>
      <p className="desc"> {publishedDate}</p>
    </div>
  )
}

export default BlogItem
