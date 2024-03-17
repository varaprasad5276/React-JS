

import { RESTARANR_CARD_IMAGES_URL } from "../Utilities/constants";


//RestarantCard Component
const RestarantCard=(Props)=>{
    const {Rest_data}=Props;
    const {cloudinaryImageId,name,avgRating :rating,sla,cuisines}=Rest_data?.info;
    return (
        <div className=" ml-4  w-[250px] h-[250px]   hover:scale-90" >
           <img className="h-[130px] w-[250px] rounded-2xl" alt="image loading"  src={ RESTARANR_CARD_IMAGES_URL+cloudinaryImageId   }/>
          <div className="ml-2"> 
              <h3 className="font-bold text-nowrap overflow-hidden text-ellipsis" >{name}</h3>
              <h4 className='w-[45px]' 
              style={
                rating < 4
                  ? { backgroundColor: "orangered" ,color: "white"}
                    : { backgroundColor: "green", color: "white" }
              }
              >☆ {rating
              
              }</h4>
              <h4 id='time'>{sla.deliveryTime} Min's</h4>
              <p className="text-ellipsis text-nowrap overflow-hidden">{cuisines.join(", ")}</p>

            </div>
            </div>
    )
}

export default RestarantCard;