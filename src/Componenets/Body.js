import RestarantCard from "./RestarantCard";
import {useState,useEffect} from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTARANTS_DATA } from "../Utilities/constants";

//body component Body 
//  - search 
//  - RestarantContainer
//     -RestarantCard(img,name,rating,time_of_delivery)  -> we are creating RestarantCard component for reusable(for all cards)

const Body=()=>{

    // local State variable - Super Power Variable
let [listofrestros,setlistofrestros]=useState([]);
let [filteredRestros,setfilteredRestros]=useState([]); // for searched filter restaurants
 let [searchText,setsearchText]=useState('');

    useEffect(()=>{
        fetchData();
        },[]);

    const fetchData=async()=>{
        const data = await fetch(RESTARANTS_DATA);
                const json= await data.json();
       // console.log('Swiggy Api JSON Data ');
        //console.log(json);
       // console.log( json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        // optional chaining (?.) for good way to write code
        setlistofrestros(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestros(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }    

    
// Shimmer UI for until get API data
//conditional rendering
//  if(listofrestros.length === 0) //condition
//  {
//      return <Shimmer />       //rendering
//  }

    return   listofrestros.length === 0 ? <Shimmer /> : //terinary operator ,shimmer UI
    (
        <div className="body">
     <div className="search">
        <input value={searchText}
        onChange={(e)=>setsearchText(e.target.value)}
        ></input>
        <button className="filter-btn" 
        onClick={()=>{console.log(searchText) ; 
     
            const ft = listofrestros.filter(
                (value)=>value.info.name.toLowerCase().includes(searchText.toLowerCase())  )
             setfilteredRestros(ft);

        }}
        >Search</button>
    </div> 


     <div className="filter">
        <button className="filter-btn"
        onClick={
            ()=>{
            const filterdList = listofrestros.filter(
                (value)=>value.info.avgRating>4.0 //curley braces not needed because we are using arrow functions,if we use normal functions then we musu use {} braces
             );
             //console.log(filterdList);
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
         
         below map function getting all data from filteredRestros for all cards from -> import { RESTARANTS_DATA } from "../Utilities/constants";


         we are passing below Rest_data to RestarantCards functional component(Rest_data name must & shold common for
             RestarantCards
            destructuring also)
         */}
        

        {                    
             searchText.length==0 ?
             listofrestros.map((restarant)=>(
                <Link id='link' key={restarant.info.id} 
                       to={"/restaurants/"+restarant.info.id}>  <RestarantCard Rest_data={restarant} />
               </Link>
              )) :
            //when ever we are doing loop/map ,we have always to give key - 
            filteredRestros.map((restarant)=>(
              <Link id='link' key={restarant.info.id} 
                     to={"/restaurants/"+restarant.info.id}>  <RestarantCard Rest_data={restarant} />
             </Link>
            ))
}

     </div>
           
     </div>
    ) 
}



export default Body;