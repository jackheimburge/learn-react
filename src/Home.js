import { useState } from "react";

const Home = () => {
    let [num, setNum] = useState(1);
    

    const handleClick = () => {
        num++
        setNum(num);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ num }</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;