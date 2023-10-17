import useFetch from "./useFetch";
import BlogList from "./BlogList";

function Home() {
    const {data:blogs,isPending, error} =useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {isPending && <h4>Loading..</h4>}
            {error && <div>{error.message}</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;