import React from "react";
import ReactDOM from "react-dom/client";
   
//React Component
    const Title = ()=>(<h1 className="head" >React using JSX..🚀</h1>);

    //React Component
    //React Functional Component 
    const HeadingComponent=(function(){
        return (
        <div id="container">
        <Title />
         <h1 className="heading"> React Functional Component ..🚀 </h1>
         </div>
      )  })
    
    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<HeadingComponent />);