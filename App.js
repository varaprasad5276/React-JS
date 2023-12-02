import React from "react";
import ReactDOM from "react-dom/client";
let u=143;
const HeadingComponent=()=>(
    <div>
     <h1 className="heading"> React Functional Component ..🚀 </h1>{u}</div>
); let v=527;
//React Element
    const Title = (
    <h1 className="head" >React using JSX..🚀
{HeadingComponent()} {v}</h1>);

    //React Component
    //React Functional Component 
    

    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(Title);