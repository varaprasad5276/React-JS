import React from "react";
import ReactDOM from "react-dom/client" ;

// // Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header=React.createElement('div',{className:"title"},
//     [
//        React.createElement("h1",{},"this is h1"),
//        React.createElement("h2",{},"this is h2"),
//        React.createElement("h3",{},"this is h3"),

//     ]
//     )

//     // Create the same element using JSX
// const header2=(
//     <div className="title">
//         <h1>This is h1</h1>
//         <h2>This is h2</h2>
//         <h3>This is h3</h3>

//     </div>
// )

// //Create a functional component of the same with JSX  and 
// //Pass attribute into the tag in JSX

// const Header3=()=>(
// <div className="title">
//         <h1 id="h1"> This is h1</h1>
//         <h2 className="h2"> This is h2</h2>
//         <h3 id='h3'>This is h3</h3>

//     </div>
// )

// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Header3 />);

// //Composition of Component (Add a component inside another)

// const CompositionComponent=()=>(
//     <div className="title">
//             <h1 id="h1"> This is h1</h1>
//             <h2 className="h2"> This is h2</h2>
//             <h3 id='h3'>This is h3</h3>
//     {header}
//         </div>
//     )
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<CompositionComponent />);        


import logo from "./images/lion.jpg";
import icon from"./images/mypic.jpg";
const Header=()=>(
<header> 
    <nav>
        
    <img src={logo} alt="not loaded" id='logo' /> 
    <div><input type="search" placeholder="search.." id="searchbox"></input> </div>
    <img src={icon} alt="icon not loaded" id='icon'/> 

    </nav>
</header>

)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);