import Shimmer from "./Shimmer";
import { ITEM_MENU_IMAGE_URL } from "../Utilities/constants";
import { useParams } from "react-router-dom";
// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL
// that were matched by the <Route path> .
import useRestarantMenu from "../Utilities/useRestarantMenu";

const RestaurantsMenu = () => {
  const { resid } = useParams();

  const menu = useRestarantMenu(resid); // custom hook

  if (menu == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, sla, avgRating } =
    menu?.cards[0].card?.card?.info;
  const { itemCards } =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  // const {id,name : item_name,price,defaultPrice,description,imageId}=item.card.info;

  return (
    <div className="grid   justify-center">
      <div className="">
        <h3 className="font-bold">{name}</h3>
        <p id="c">{cuisines.join(",")}</p>
        <p id="area">{areaName}</p>
        <h4 id="t">{sla.deliveryTime} min</h4>
        <h2 className="ml-[45rem] -mt-9 w-14 bg-green-400">★ {avgRating}</h2>
        <h5 className="mt-3">{costForTwoMessage}</h5>
      </div>

      <div className="">
        {/* <h2>Menu</h2> */}
        {/* <h3>{itemCards[0].card.info.name}</h3> */}

        {itemCards.map((item) => (
          <ul  key={item.card.info.id}>
            
      <div className="ml-7 my-9 ">
            <li className="font-semibold ">
              <h3>{item.card.info.name} </h3>
            </li>
            <li className="price">
              ₹
              {item.card.info.price / 100 ||
                item.card.info.defaultPrice / 100}{" "}
            </li>
            <li className="w-[30rem]  text-nowrap overflow-hidden text-ellipsis  ">{item.card.info.description}</li>
           
            <img
              className="ml-[39rem] -mt-[5.5rem] w-52  h-28  mr-3 rounded-xl "
              src={ITEM_MENU_IMAGE_URL + item.card.info.imageId}
              alt="image loading"
            ></img> </div>
            <hr className="border-black"/>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
