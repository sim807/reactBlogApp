import React, { useContext, useEffect, useState } from 'react'

import { Link ,useNavigate, useParams} from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState';
// import {v4 as uuid} from 'uuid';
import { Form, FormGroup, Input, Label,Button} from 'reactstrap'
import MainScreen from './MainScreen';

function EditBlog(props) {

  const {blogs, editBlog}=useContext(GlobalContext);

  const navigate= useNavigate();

  const [selectedBlog,setSelectedBlog]=useState({
    id:'',
    title:'',
    category:'',
    likes:Number,
    description:''

  });
 

  // const [title,setTitle]=useState('');
  // const [category,setCategory]=useState('');
  // const [description,setDescription]=useState('');


  const currentBlogId=localStorage.getItem('ID');
  // console.log(currentBlogId)
  // const getProduct=(currentBlogId)=>{
  //   const product=blogs.find(blog=>
  //     (blog.id)===Number(currentBlogId))
  //     return product

  // }
  

  useEffect(()=>{
  //  const blogId=currentBlogId;
  //  console.log(parseInt(blogId))
  //  console.log(blogs)
  // console.log(localStorage.getItem('ID'))
   const blogId=currentBlogId;
  //  console.log((blogId))
   
    const selectedBlog=blogs.find(blog=>
  
      (blog.id===parseInt(blogId))
    )
// console.log(blogs.find(blog=>
  
//   blog.id===parseInt(blogId)
// ))
  //   console.log(getProduct(currentBlogId))
    // const selectedBlog=getProduct(blogId)
    // console.log(selectedBlog)
    setSelectedBlog(selectedBlog);
    // setTitle(localStorage.getItem('TITLE'));
    // setCategory(localStorage.getItem('CATEGORY'));
    // setDescription(localStorage.getItem('DESCRIPTION'))

  },[currentBlogId,blogs])
  // console.log(selectedBlog)

  const submit=(e)=>{
    
    e.preventDefault();
    
   
    editBlog(selectedBlog);
    navigate('/')
  }
  const onChange=(blogkey,val)=>
    // setTitle(e.target.value);
    setSelectedBlog({ ...selectedBlog, [blogkey]: val });
  

  return (
    <MainScreen title={'Edit Blog'} style={{maxWidth:"45rem", margin:"4rem auto"}}>
    <Form onSubmit={submit} style={{maxWidth:"30rem", margin:"4rem auto"}}>
    <FormGroup>
      <Label >
        Title
      </Label>
      <Input
       
        name='title'
        placeholder="Enter Title"
        type="text"
        value={selectedBlog.title}
        onChange={e => onChange("title", e.target.value)}
       
      />
    </FormGroup>
    <FormGroup>
      <Label >
        Category 
      </Label>
      <Input
        
       name='category'
        placeholder="Enter Category"
        type="text"
        value={selectedBlog.category}
        onChange={e => onChange("category", e.target.value)}
     
      />
    </FormGroup>
    <FormGroup>
      <Label >
        Description
      </Label>
      <Input
        
        name='description'
        type="textarea"
        value={selectedBlog.description}
        onChange={e => onChange("description", e.target.value)}
        
        
      />
    </FormGroup>
    <Button type="submit" color="info" className='btn btn-warning m-2'>
      Edit
    </Button>
   
    <Link to="/" className='btn btn-danger m-2'>Cancel</Link>
  
  </Form>
  </MainScreen>
  )
}

export default EditBlog
 