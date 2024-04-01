import { useEffect } from "react";
import { ITEM_MENU_IMAGE_URL } from "../Utilities/constants";
import {  useDispatch } from "react-redux";
import { addItem } from "../Utilities/Redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch=useDispatch();
  function addItemToCart(item) {
    // Dispatch the action
    dispatch(addItem(item))
  }

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2  border-gray-200 border-b-2 pt-5"
        >
          <div className="grid ">
            <span className="font-medium text-left">{item.card.info.name}</span>
            <span className="text-left text-sm">
              ₹ {item.card.info.price / 100}
            </span>
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-left mt-2">
              {item.card.info.description}
            </p>
            <img
              src={ITEM_MENU_IMAGE_URL + item.card.info.imageId}
              className="-mt-12 w-24 h-24 rounded-md "
              alt="image loading"
            ></img>
          </div>
          <button
            className=" text-white bg-black sticky ml-[37rem] rounded-md"
            onClick={()=>addItemToCart(item)}
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
