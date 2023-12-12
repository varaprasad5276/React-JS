import { useState } from "react";

const User=(props)=>{
    const [count,setcount]=useState(0);
    return (
        <div className="user-card">
            <h2>count :{count}</h2>
            <button 
            onClick={()=>{
                setcount(count+1);
            }}
            >
                click</button>
     <h2>Name : {props.name} </h2>
     <h3>Contact : GV@mail.com</h3>
     <h4>Location : Nellore</h4>
     </div>
    )
}

export default User;