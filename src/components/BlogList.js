import React, { useContext, useState } from "react";
import { Accordion, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import ReactMarkdown from "react-markdown";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import MainScreen from "./MainScreen";

function BlogList() {
  const { blogs, removeBlog,editBlog } = useContext(GlobalContext);
 
  const [selectedBlog,setSelectedBlog]=useState({
    id:'',
    title:'',
    category:'',
    likes:Number,
    description:''

  });
 
  const setData = (id) => {
    localStorage.setItem("ID", id);
  };

  const removeBlogHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      removeBlog(id);
    }
  };
  const handleLike = (blog) => {
    let selectedBlog=blogs.find(blogg=>
      blogg.id===parseInt(blog.id));
      console.log(selectedBlog)
      let likes=selectedBlog.likes;
      likes+=1;
      selectedBlog.likes=likes

      console.log(selectedBlog.likes)
      setSelectedBlog(selectedBlog)
      // console.log(selectedBlog.likes)

    
    
    editBlog(selectedBlog);
  };

  return (
    <MainScreen title={"Welcome Simran"}>
      <Link
        className="btn btn-info"
        to="/add"
        style={{ marginLeft: 10, marginBottom: 6 }}
      >
        Create a new Blog
      </Link>
      {blogs.map((blog) => (
        <Accordion key={blog.id}>
          <AccordionItem eventKey="1" style={{ margin: 10 }}>
            <Card>
              <Accordion.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {blog.title}
                </span>
              </Accordion.Header>

              <Accordion.Body>
                <h4>
                  <Badge variant="success">Category - {blog.category}</Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <ReactMarkdown>{blog.description}</ReactMarkdown>
                </blockquote>
                <hr />

                <div className="mx-auto">
                  {/* {
              !blog.liked && (<Button className='btn btn-info mr-1'>Like</Button>)
              } */}
                  <Button
                    className="btn btn-info mr-1"
                    onClick={() => handleLike(blog)}
                  >
                    Likes {blog.likes}
                  </Button>
                  <Link
                    to={`/edit/${blog.id}`}
                    onClick={() => setData(blog.id)}
                    className="btn btn-warning mx-2 mr-1"
                  >
                    {" "}
                    Edit
                  </Link>
                  <Button
                    color="danger"
                    className=""
                    onClick={() => removeBlogHandler(blog.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Accordion.Body>
            </Card>
          </AccordionItem>
        </Accordion>
      ))}
    </MainScreen>

    // <ListGroup>
    //   {blogs.map(blog=>(

    //     <ListGroupItem className='d-flex' key={blog.id} >
    //         <strong className='mx-4'>{blog.title}</strong>
    //         <div className='mx-auto'>
    //             <Link to={`/edit/${blog.id}`}  onClick={() => setData(blog.id)} className='btn btn-warning mr-1'> Edit</Link>
    //             <Button color='danger' className='mx-2' onClick={()=>removeBlog(blog.id)}>Delete</Button>
    //         </div>
    //     </ListGroupItem>

    //   )

    //   )}
    //   </ListGroup>
  );
}

export default BlogList;
