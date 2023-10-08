const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2 className="bloglist-title">{ title }</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p className="blog-body">{ blog.body }</p>
                <p>Written by: { blog.author }</p>
                <button onClick={() => {handleDelete(blog.id)}} >Delete Blog</button>
            </div>
        ))}  
        </div>  
     );
}
 
export default BlogList;