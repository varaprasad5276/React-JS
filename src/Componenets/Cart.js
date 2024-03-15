import json from "../practice.json"
import { useState } from "react";
const Cart=()=>{
    // console.log(json);
    console.log(json.tables.guests.columns.length);
    console.log(Object.keys(json.tables.guests.columns).length);
 let cols=Object.keys(json.tables.guests.columns);
 console.log(cols);
    // return (
//         <div>
// <h1>Cart Page </h1>
// {/* <input type="checkbox">a</input> */}
// { <select >    
//    {Object.keys(json.tables.guests.columns).map((key) => {
//         return <option >{key}</option>

//       })}
//     </select>
//      }
// </div>

let [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
    {/* let l=Object.keys(json.tables.guests.columns).length; */}
      <label>
    
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me!
        {Object.keys(json.tables.guests.columns).map((key) => {
       return <h1 type="checkbox" >{key}</h1>

    })}
      </label> 
     
    
    </div>
  );

// )

}

export default Cart;
