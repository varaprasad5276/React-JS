

import { RESTARANR_CARD_IMAGES_URL } from "../Utilities/constants";


//RestarantCard Component
const RestarantCard=(Props)=>{
    const {Rest_data}=Props;
    const {cloudinaryImageId,name,avgRating :rating,sla,cuisines}=Rest_data?.info;
    return (
        <div className="card">
           <img className="image" alt="image loading"  src={ RESTARANR_CARD_IMAGES_URL+cloudinaryImageId   }/>
          <div className="content"> 
              <h3 id='rname'>{name}</h3>
              <h4 id='rating' 
              style={
                rating < 4
                  ? { backgroundColor: "orangered" }
                    : { backgroundColor: "green", color: "white" }
              }
              >☆ {rating
              
              }</h4>
              <h4 id='time'>. {sla.deliveryTime} Min's</h4>
              <p id='food'>{cuisines.join(", ")}</p>

            </div>
            </div>
    )
}

export default RestarantCard;