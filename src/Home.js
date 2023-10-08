import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Blog 1', body: 'lorem...', author: 'Jack', id: 1},
        {title: 'Blog 2', body: 'lorem...', author: 'Zoe', id: 2},
        {title: 'Blog 3', body: 'lorem...', author: 'Yuandan', id: 3},
    ])

const [name, setName] = useState('Jack');

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log('name changed');
}, [name])

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('Zoe')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;