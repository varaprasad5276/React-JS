# React_JS

# parcel
- parecel creates Dev,loca Server and it host's our app into the server for you
- its automatically refreshing page as well ,when you    make changes  this is called HRM (Hot Module Replacement)
- parcel using File Watching Algorithm
- parcel gives us Faster Builds because of caching
- parcel do Image Optimization,Minificating the files and  Bundling the all files and compressing
- consistant hashing -> it keeps the tracks of all
- code splitting
- differential bundling -> it supports old browsers
- error handling
- we can host our app in HTTPS also
   npx parcel index.html --https
- Tree Shaking - it removes unused code
- different build for dev and prod bundles

# Food Ordering App

//  1) first component Header 
//-logo ,nav items (home,about,contact,cart)

// 2) body component Body 
//  - search 
//  - RestarantContainer
//     -RestarantCard(img,name,rating,time_of_delivery)  -> we are creating RestarantCard component for reusable(for all cards)

// 4) RestarantCard Component -reusable component for cards

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
            resobj.map((v)=>(
                <RestarantCard key={v.info.id} Rest_data={v} />
            ))
        }

        3) third component Footer
        copyright ,links , address ,contacts
===========================================
      #  "Episode 6 : useEffect-fetch the data from API ,Shimmer UI ,filtered restarunts data "

      -> for filtering search data ,we are creating  new local state variable 
             let [filteredRestros,setfilteredRestros]=useState([]); // for searched filter restaurants
         then we are setting the API data for setfilteredRestros
                     setfilteredRestros(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      ->   then we are filtering the search data with listofrestros,then we are setting the result of filterd data 
                  to  setfilteredRestros(ft)
              <div className="search">
        <input value={searchText}
        onChange={(e)=>setsearchText(e.target.value)}
        ></input>
        <button className="filter-btn" 
        onClick={()=>{
            console.log(searchText) ; 
     
            const ft = listofrestros.filter(
                (value)=>value.info.name.toLowerCase().includes(searchText.toLowerCase())  )
             setfilteredRestros(ft);

        }}
        >Search</button>
    </div> 
    -> then we are passing the filteredRestros local state variable

      {
            //when ever we are doing loop/map ,we have always to give key - 
            
            filteredRestros.map((v)=>(
                <RestarantCard key={v.info.id} Rest_data={v} />
            ))
            
        }
