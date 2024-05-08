import RestarantCard, { WithPromotedLabel } from "./RestarantCard";
import { useState, useEffect, useContext } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTARANTS_DATA } from "../Utilities/constants";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import userContext from "../Utilities/UserContext";
//body component Body
//  - search
//  - RestarantContainer
//     -RestarantCard(img,name,rating,time_of_delivery)  -> we are creating RestarantCard component for reusable(for all cards)

const Body = () => {
  // local State variable - Super Power Variable
  const [listofrestros, setlistofrestros] = useState([]);
  const [filteredRestros, setfilteredRestros] = useState([]); // for searched filter restaurants
  const [searchText, setsearchText] = useState("");
  const RestarantCardPromoted = WithPromotedLabel(RestarantCard);

  const { setuserName, loggedInUser } = useContext(userContext);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(listofrestros);

  const fetchData = async () => {
    const data = await fetch(RESTARANTS_DATA);
    const json = await data.json();
    // console.log('Swiggy Api JSON Data ');
    // console.log(json);
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    // optional chaining (?.) for good way to write code
    setlistofrestros(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestros(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // shows online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>You are Offline, Pleace Check Your Internet Connection</h1>;

  // Shimmer UI for until get API data
  //conditional rendering
  //  if(listofrestros.length === 0) //condition
  //  {
  //      return <Shimmer />       //rendering
  //  }

  return listofrestros.length === 0 ? (
    <Shimmer /> //terinary operator ,shimmer UI
  ) : (
    <div>
      <div className="flex items-center justify-center mt-5">
        <div className="">
        <input
          className="border border-black  ml-12 h-10 pl-2 w-[20rem] "
          data-testid="searchInput"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        ></input>
        <button
          className="  w-16  bg-orange-400 hover:bg-green-300 border border-black h-10 text-white"
          onClick={() => {
            console.log(searchText);

            const ft = listofrestros.filter((value) =>
              value.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestros(ft);
          }}
        >
          Search
        </button>
        </div>

        <div className="filter">
          {/* <button
            className="bg-green-400 m-4 w-24 rounded-lg hover:bg-orange-300"
            onClick={() => {
              const filterdList = listofrestros.filter(
                (value) => value.info.avgRating > 4.0 //curley braces not needed because we are using arrow functions,if we use normal functions then we musu use {} braces
              );
              //console.log(filterdList);
              setlistofrestros(filterdList);
            }}
          >
            Top Rated
          </button> */}
        </div>

      {/*  <div className="border border-black ">
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
          </div> */}
      </div>

      <div className="flex flex-wrap  mt-10 gap-5 ml-[150px] rounded-2xl">
        {/* the below given values are Props (properties -name,food)
                        <RestarantCard name='shah gouse' food='biryani />

         <RestarantCard resData={resobj[0]}/> 
         js code we can write inside JSX with use of curley braces { }
         
         below map function getting all data from filteredRestros for all cards from -> import { RESTARANTS_DATA } from "../Utilities/constants";


         we are passing below Rest_data to RestarantCards functional component(Rest_data name must & shold common for
             RestarantCards
            destructuring also)
         */}

        {searchText.length == 0
          ? listofrestros.map((restarant) => (
              <Link
                id="link"
                key={restarant.info.id}
                to={"/restaurants/" + restarant.info.id}
              >
                {/* {restarant.info.avgRating > 4 ? (
                  <RestarantCardPromoted Rest_data={restarant} />
                ) : (
                  <RestarantCard Rest_data={restarant} />
                )} */}
                                  <RestarantCard Rest_data={restarant} />

              </Link>
            ))
          : //when ever we are doing loop/map ,we have always to give key -
            filteredRestros.map((restarant) => (
              <Link
                id="link"
                key={restarant.info.id}
                to={"/restaurants/" + restarant.info.id}
              >
                <RestarantCard Rest_data={restarant} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
