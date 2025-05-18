import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout.jsx/Root.jsx';
import Home from './Component/Home.jsx';
import Addnewcoffe from './Component/Addnewcoffe.jsx';
import Detailspage from './Detailspage.jsx';
import Updatepage from './Pages/Updatepage.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import AuthContextProvider from './Context/ContextProvider.jsx';
import Profile from './Pages/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[{
      index:true,
      Component:Home,

    },
    {
      path:"/addcoffee",
      Component:Addnewcoffe
    },
    {
      path:"/coffeedetails/:id",
      Component:Detailspage,
      loader:({params})=>fetch(`/api/details/${params.id}`)

    },
    {
      path:"/updatecoffee/:id",
      Component:Updatepage,
      loader:({params})=>fetch(`/api/details/${params.id}`)
    },
    {
      path:"/signup",
      Component:Signup
    },
    {
      path:"/login",
      Component:Login
    },
    {
      path:"profile",
      Component:Profile,
      loader:()=>fetch("/api/profile")
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContextProvider>
       <RouterProvider router={router} />
     </AuthContextProvider>
  </StrictMode>,
)
