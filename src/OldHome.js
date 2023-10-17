import { useState,useEffect } from "react"
import axios from "axios";
import BlogList from "./BlogList";

function Home() {
    const [blogs, setBlogs] = useState([])
    
      const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      }
      const handleClick =(e)=>
      {
        console.log('Clicked ',e)
    }
    const handleClick2 =(name)=>
    {
        console.log('Clicked '+ name)
    }
    //if we don't use state it won't change in the UI
    const [isPending,setIsPending]= useState(true)
    const [error,setError]= useState(null)
    const [newName,setnewName]=useState('Mario');
    const updateName =(name)=>
    {
        setnewName('Luigi')
    }
    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
          .then(response => {
            setBlogs(response.data);
            setIsPending(false);
            setError(null)//remove error msg after success 
          })
          .catch(error => {
            console.error('Error fetching blogs:', error);
            setError(error)
          });
      }, []);
    // useEffect(() => {
    //     axios.get('http://localhost:8000/blogs')
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then(data => {
    //         setBlogs(data);
    //       })
    //   }, [])
    
    return ( 
        <div className="home">
            {isPending && <h4>Loading..</h4>}
            {error && <div>{error.message}</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            <br/><br/><br/><br/>
            {/* <h1>Home</h1> */}
            <p>{newName}</p>
            <button onClick={updateName}> Change Name</button>
            <button onClick={handleClick}> Click Me!</button>
            <button onClick={()=>handleClick2('Brook')}> Click Me Again</button>
        </div>
     );
}
 
export default Home;