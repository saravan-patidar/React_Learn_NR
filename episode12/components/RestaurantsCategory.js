// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = ({ data, showItem, setShowIndex }) => {
  const { title, itemCards } = data?.card?.card;

  return (
    <div className=" my-9  items-center shadow-md">
      <div
        className="flex justify-between bg-gray-200 w-[100%] cursor-pointer p-3"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span className="font-bold ">
          {title} ({itemCards.length})
        </span>
        <span>{showItem ? "▲" : "▼"}</span>
      </div>
      {showItem && <ItemList itemCards={itemCards} />}
    </div>
  );
};
export default RestaurantsCategory;
