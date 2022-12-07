import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState = {
  blogs: [
    {
      id: 1,
      title: "reactCourse",
      category: "react",
      likes:0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      title: "NodeCourse",
      category: "node",
      likes:0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      title: "angularCourse",
      category: "angular",
      likes:0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
  
    const [state,dispatch]=useReducer(AppReducer,initialState);

    const removeBlog=(id)=>{
      dispatch({
        type:'REMOVE_BLOG',
        payload:id
      })
  
    }
    const addBlog=(blog)=>{
      dispatch({
        type:'ADD_BLOG',
        payload:blog
      })
  
    }
    const editBlog=(blog)=>{
      dispatch({
        type:'EDIT_BLOG',
        payload:blog
      })
  
    }
    // const increaseLikes=(id)=>{
    //   dispatch({
    //     type:'INCREASE_LIKES',
    //     payload:id
    //   })
  
    // }
    return(
        <GlobalContext.Provider value={{
          blogs:state.blogs,
          removeBlog,
          addBlog,
          editBlog,
          // increaseLikes
          }}>
            {children}
        </GlobalContext.Provider>
    )

}
