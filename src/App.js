import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import   Contact from "./components/pages/Contact";
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import {
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {

  const router = createBrowserRouter([
    {
      element : <Navbar />,
      children:[
        {
path:'/',
element:<Home />

        },
        {
          path:"/contact",
          
          element:<Contact />
        },
        {
          path:'/about',
          element:<About />
        },

        {
          path:'/user/add',
          element:<AddUser/>
        },
        {
          path:'/user/edit/:id',
          element:<EditUser/>
        },
        {
          path:'/user/:id',
          element:<User/>
        },

        {
          path:'*',
          element:<NotFound />
        }

        
      ]
    
    }
    
  ])
  return (
    <div className='app'>
    <RouterProvider router={router} />
   
    </div>
  );
}

export default App;
