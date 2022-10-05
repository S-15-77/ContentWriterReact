import { waitFor } from "@testing-library/react";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data : blog,isPending,error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blog && <BlogList blog = {blog} title = "BLOGS"/>}
            
        </div>
     );
}
 
export default Home;