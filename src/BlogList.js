import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2 className="bloglist-title">{ title }</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`} >
                    <h2>{ blog.title }</h2>
                    <p className="blog-body">{ blog.body }</p>
                    <p>Written by: { blog.author }</p>
                </Link>
            </div>
        ))}  
        </div>  
     );
}
 
export default BlogList;