export default(state,action)=>{
    switch(action.type){
       case 'REMOVE_BLOG':
           return{
               
               blogs:state.blogs.filter(blog=>{
                  return  blog.id!==action.payload;

               })
           }
           case 'ADD_BLOG':
            // console.log(action.payload)
            return{
               
                blogs:[action.payload, ...state.blogs]
             }
             case 'EDIT_BLOG':
                 const updatedblog=action.payload
                 
                 const updatedBlogs=state.blogs.map(blog=>{

                     if(blog.id===updatedblog.id) {
                         return updatedblog
                        }

                     else {
                         return blog
                     }
                 })
                 return{
                     blogs:updatedBlogs
                 }
               
        default:return state
    }
}