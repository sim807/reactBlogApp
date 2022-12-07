import React from 'react'
import BlogList from './BlogList';
import Header from './Header';

function Home() {
  return (
      <div className='home'  style={{maxWidth:"45rem", margin:"4rem auto"}}>
        
        <BlogList/>
    </div>
  )
}

export default Home