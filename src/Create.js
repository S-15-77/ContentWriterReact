import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('Name1');
  const [load,setLoad] = useState(false)
  const history = useHistory()
  const handleSubmit = (e) =>{
    e.preventDefault();

    setLoad(true)

    const blog = {title,body,author};
    fetch('http://localhost:8000/blogs',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("added..");
      setLoad(false)
      history.push('/')
    })
  }

    return (
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input 
          type="text" 
          required
          value={title}
          onChange = {(e) => setTitle(e.target.value)}/>
          <label >Blog Body:</label>
          <textarea 
          required
          value = {body}
          onChange = {(e) => setBody(e.target.value)} 
          ></textarea>
          <label>Blog Author</label>
          <select
          value = {author}
          onChange = {e => setAuthor(e.target.value)}
          >
            <option value="Name1">Name1</option>
            <option value="Name2">Name2</option>
          </select>
          {!load && <button>Add Blog</button>}
          {load && <button disabled >Adding...</button>}
          
        </form>
      </div>
    );
  }
   
  export default Create;