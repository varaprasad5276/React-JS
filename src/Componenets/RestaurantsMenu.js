import Shimmer from "./Shimmer";
import { ITEM_MENU_IMAGE_URL } from "../Utilities/constants";
import { useParams } from "react-router-dom";
// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL 
// that were matched by the <Route path> .
import useRestarantMenu from "../Utilities/useRestarantMenu";

const RestaurantsMenu=()=>{
    const {resid}=useParams();

    const menu=useRestarantMenu(resid);// custom hook

     if (menu == null ) return ( <Shimmer /> );

   const {name,cuisines,costForTwoMessage,areaName,sla,avgRating}=menu?.cards[0].card?.card?.info;
   const {itemCards}=menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   // console.log(itemCards);

   // const {id,name : item_name,price,defaultPrice,description,imageId}=item.card.info;

    return  (
    <div className="menu">
        <div className="top">
        <h3 id='rn'>{name}</h3>
         <p id='c'>{cuisines.join(',')}</p>
        <p id='area'>{areaName}</p>   
         <h4 id='t'>{sla.deliveryTime} min</h4>
         <h2 id='rati'>★ {avgRating}</h2>
        <h5 id='cost'>{costForTwoMessage}</h5>
            </div>

            <div>
        <h2>Menu</h2>
         {/* <h3>{itemCards[0].card.info.name}</h3> */}
            

       { 
       itemCards.map((item)=>(


            <ul id="menu-details" key={item.card.info.id}>
            <img className="item-image" src={ITEM_MENU_IMAGE_URL+item.card.info.imageId} alt="image loading"></img>

              <li className="name">  <h3>{item.card.info.name} </h3></li>
               <li className="price"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100 } </li>
               <li className="description">{item.card.info.description}</li>


                </ul>
       )
    
         )}
         </div>
    </div>
    )
}

export default RestaurantsMenu;