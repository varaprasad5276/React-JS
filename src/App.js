import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Componenets/Header";
import Body from "./Componenets/Body";




//APP Layout 

const AppLayout=()=>{
return (
    <div className="applayout">
    <Header />
    <Body />
    </div>

);
};

    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<AppLayout/>);