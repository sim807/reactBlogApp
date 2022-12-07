
import { BrowserRouter , Route} from 'react-router-dom';
import { Routes} from 'react-router';
import './App.css';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';

import Home from './components/Home';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';


function App() {
  return (
    <div className='App'>
    <GlobalProvider>
    <BrowserRouter>
    <Header/>

    
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      
      
      
        <Route path='add' element={<AddBlog/>}/>
      
     
      
       <Route path='edit/:1' element={<EditBlog/>}/>
      
    
      </Routes>
      
    
    </BrowserRouter>
    </GlobalProvider>
    </div>
      
  );
}

export default App;
