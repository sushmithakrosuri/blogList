// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div className="all-data">
      {blogsData.map(eachData => (
        <BlogItem blog={eachData} key={eachData.id} />
      ))}
    </div>
  )
}

export default BlogList
