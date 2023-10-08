import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Blog 1', body: 'lorem...', author: 'Jack', id: 1},
        {title: 'Blog 2', body: 'lorem...', author: 'Zoe', id: 2},
        {title: 'Blog 3', body: 'lorem...', author: 'Yuandan', id: 3},
        
    ])
    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="Welcome!"/>
        </div>
    );
}
 
export default Home;