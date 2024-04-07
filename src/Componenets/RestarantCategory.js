import { useState } from "react";
import ItemList from "./ItemList";

const RestarantCategory = ({ data, showItems, setshowIndex }) => {
  //   console.log(data);
  function handleclick() {
    setshowIndex();
  }
  // console.log(showItems);
  return (
    <div>
      {/* accordion header */}
      <div className=" w-6/12 mx-auto mb-5 pt-5 shadow-lg bg-gray-100 rounded-lg p-3 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {data.card.card.title} ( {data.card.card.itemCards.length} )
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.card.card.itemCards} />}
      </div>
    </div>
  );
};
export default RestarantCategory;
