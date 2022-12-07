// import { Button } from 'bootstrap'
import React, { useContext, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { Form, FormGroup, Input, Label,Button} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState';
import MainScreen from './MainScreen';
// import {v4 as uuid} from 'uuid';

function AddBlog() {
  const {addBlog,blogs}=useContext(GlobalContext);

  const navigate= useNavigate();

  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('');
  const [description,setDescription]=useState('');

  const onSubmit=()=>{
    
    const newBlog={
      id:blogs.length+1,
      title,
      category,
      likes:0,
      description
  }
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    addBlog(newBlog);
    navigate('/')
  }

  const onChange=(e)=>{
    setTitle(e.target.value);
  }

  return (
    <MainScreen title={'Create a new blog'} style={{maxWidth:"30rem", margin:"4rem auto"}}>
    <Form onSubmit={onSubmit} style={{maxWidth:"45rem", margin:"4rem auto"}} >
  <FormGroup>
    <Label >
      Title
    </Label>
    <Input
     value={title}
     onChange={onChange}
      placeholder="Enter Title"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Category
    </Label>
    <Input
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      placeholder="Enter Category"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Description
    </Label>
    <Input
      value={description}
     
      type="textarea"
      onChange={(e)=>setDescription(e.target.value)}
    />
  </FormGroup>
  <Button type="submit" color="info" className='btn btn-info m-2'>
    Add
  </Button>
 
  <Link to="/" className='btn btn-danger m-2'>Cancel</Link>

</Form>
</MainScreen>
  )
}

export default AddBlog