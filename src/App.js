import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Componenets/Header";
import Body from "./Componenets/Body";

import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./Componenets/About";
import Contact from "./Componenets/Contact";
import Error from "./Componenets/Error";
import RestaurantsMenu from "./Componenets/RestaurantsMenu";
import LogIn from "./Componenets/LogIn";
// import Grocery from "./Componenets/Grocery";
import Cart from "./Componenets/Cart";
import userContext from "./Utilities/UserContext";

import { Provider } from "react-redux";
import appStore from "./Utilities/Redux/appStore";

const Grocery = lazy(()=>import('./Componenets/Grocery'));
const About = lazy(()=>import('./Componenets/About'));


//APP Layout 

const AppLayout=()=>{
  const[userName,setuserName]=useState();
  useEffect(()=>{
const data={
  name:" Prasad",
};
setuserName(data.name)
  },[])
return (
  // connscting our store(appStore) to our App through Provider
  <Provider store={appStore} > 
  <userContext.Provider value={{loggedInUser:userName ,setuserName}}>
    <div className="applayout">
    <Header />
    <Outlet />
    </div>
    </userContext.Provider>
    </Provider>

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
            element:<Suspense fallback='Loading About Page..'><About /></Suspense>
        
           },
           {
            path:"/Contact",
            element:<Contact />
           },
           {
            path:"/Grocery",
            element:<Suspense fallback='Loading Grocery Page..'><Grocery /></Suspense>
           },
           {
            path:"/Cart",
            element:<Cart />
           },
           {
            path:"/Restaurants/:resid",  // :res id is dynamic 
            element:<RestaurantsMenu />
           },
           {
            path:"/LogIn",
            element:<LogIn />
           },
         
    ],
     errorElement: <Error />

   }

]);
    const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<AppLayout/>);

    root.render(<RouterProvider router={appRouter} />);