import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Componenets/Header";
import Body from "./Componenets/Body";

import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./Componenets/About";
import Contact from "./Componenets/Contact";
import Error from "./Componenets/Error";
import RestaurantsMenu from "./Componenets/RestaurantsMenu";
import LogIn from "./Componenets/LogIn";


//APP Layout 

const AppLayout=()=>{
return (
    <div className="applayout">
    <Header />
    <Outlet />
    </div>

);
};

//creating router config
const appRouter =createBrowserRouter([
   {
    path:"/",
    element: <AppLayout />,
    children:[
          {
            path:"/",
            element:<Body />
          },
          {
            path:"/About",
            element:<About />,
        
           },
           {
            path:"/Contact",
            element:<Contact />
           },
           {
            path:"/Restaurants/:resid",  // :res id is dynamic 
            element:<RestaurantsMenu />
           },
           {
            path:"/LogIn",
            element:<LogIn />
           }
    ],
     errorElement: <Error />

   }

]);
    const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<AppLayout/>);

    root.render(<RouterProvider router={appRouter} />);