import RestarantCard from "./RestarantCard";
import {useState} from "react";

import resobj from "../Utilities/mockData";// json data for all cards info


//body component Body 
//  - search 
//  - RestarantContainer
//     -RestarantCard(img,name,rating,time_of_delivery)  -> we are creating RestarantCard component for reusable(for all cards)

const Body=()=>{
    // State variable - Super Power Variable
let [listofrestros,setlistofrestros]=useState(resobj);
 let [searchedText,setsearchedText]=useState('');

    return (
        <div className="body">
     <div className="search">
        <input 
        value={searchedText}
        onChange={(e)=>setsearchedText(e.target.value)}
        ></input>
        <button className="filter-btn" 
        onClick={()=>{
            const ft = listofrestros.filter(
                (value)=>value.info.name.toLowerCase().includes(searchedText.toLowerCase())//curley braces not needed because we are using arrow functions,if we use normal functions then we musu use {} braces
             );
             console.log(ft);
             setsearchedText(ft);
        }}
        >Search</button>
    </div> 


     <div className="filter">
        <button className="filter-btn"
        onClick={
            ()=>{
            const filterdList = listofrestros.filter(
                (value)=>value.info.avgRating>=4.4 //curley braces not needed because we are using arrow functions,if we use normal functions then we musu use {} braces
             );
             console.log(filterdList);
        setlistofrestros(filterdList);
        }
    }
        
        > Top Rated 
        </button>
     </div>
     <div className="restrant_container">
        {/* the below given values are Props (properties -name,food)
                        <RestarantCard name='shah gouse' food='biryani />

         <RestarantCard resData={resobj[0]}/> 
         js code we can write inside JSX with use of curley braces { }
         
         below map function getting all data fron resobj(config/json file) for all cards 

         we are passing below Rest_data to RestarantCards functional component(Rest_data name must & shold common for
             RestarantCards
            destructuring also)
         */}
        {
            //when ever we are doing loop/map ,we have always to give key
            listofrestros.map((v)=>(
                <RestarantCard key={v.info.id} Rest_data={v} />
            ))
        }

     </div>

     </div>
    ) 
}



export default Body;