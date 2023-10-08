const Home = () => {

    const handleClick = (name, e) => {
        console.log(name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => {handleClick('Jack', e)}}>Click Me</button>
        </div>
     );
}
 
export default Home;