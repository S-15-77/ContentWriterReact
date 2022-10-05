import { Link } from "react-router-dom";

const BlogList = ({blog,title}) => {
    // const blog = props.blog;
    // const title = props.title;

    return (
        
        <div className="blog-list">
            <h1>{title}</h1>
            {blog.map( (blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <Link to = {`/blogs/${blogs.id}`}>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList