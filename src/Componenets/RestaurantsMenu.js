import Shimmer from "./Shimmer";
import { ITEM_MENU_IMAGE_URL } from "../Utilities/constants";
import { useParams } from "react-router-dom";
// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL
// that were matched by the <Route path> .
import useRestarantMenu from "../Utilities/useRestarantMenu";
import RestarantCategory from "./RestarantCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
  const [showIndex, setshowIndex] = useState(null);

  const { resid } = useParams();

  const menu = useRestarantMenu(resid); // custom hook

  if (menu == null) return <Shimmer />;
  console.log(menu);

  const { name, cuisines, costForTwoMessage, areaName, sla, avgRating } =
    menu?.cards[2].card?.card?.info;
  // const { itemCards } =
  //   menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR); //card 1 to

  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // card.filter(c=>c.cards?.["card."]["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(showIndex);
  console.log(categories);

  // const {id,name : item_name,price,defaultPrice,description,imageId}=item.card.info;

  return (
    <div className="text-center">
      <h3 className="font-bold">{name}</h3>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* accordion for categories */}
      {categories.map((category, index) => (
        //controlled component
        <RestarantCategory
          data={category}
          key={category.card.card.title}
          showItems={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
