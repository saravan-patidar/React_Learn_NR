import { ITEM_IMG_URL, CARD_ID } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../../episode9/components/Shimmer";
import useRestaurantCard from "../../episode9/utils/useRestaurantCard";
import starLogo from "../../imges/star.png";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantCard(resId);
  const [isActive, setIsActive] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
    totalRatingsString,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (x) => x?.card?.card["@type"] === CARD_ID
    );

  const handleIndex = (index) => {
    index === isActive ? setIsActive(null) : setIsActive(index);
  };
  return (
    <div>
      <div className="bg-slate-300 w-9/12 m-auto mt-24 my-1 p-3 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{feeDetails.message}</p>
        </div>
        <div className="bg-slate-700 text-white p-2 rounded-md text-center">
          <h3 className="font-bold ">{costForTwoMessage}</h3>
          <h4 className="text-sm">{sla.slaString}</h4>
        </div>
        <div className="px-3 bg-slate-700 text-white p-1 rounded-md">
          <p className="flex bg-green-400 rounded-xl w-16 p-1 m-auto">
            <img className="w-7 px-1" src={starLogo} /> {avgRating}
          </p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className=" my-5 w-9/12 m-auto">
        {itemCards.map((item, index) => (
          <RestaurantsCategory
            data={item}
            key={item.card.card.title}
            showItem={isActive === index}
            setShowIndex={() => handleIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantsMenu;
{
  /* <div className="w-4/6">
                <h4 className="font-bold text-lg">
                  {name} - ₹{price / 100}
                </h4>
                <p className="text-sm py-2">{description}</p>
              </div>
              <div className="h-[100%]">
                <img
                  src={ITEM_IMG_URL + imageId}
                  alt="menu-img"
                  className="rounded-md h-[100%] "
                />
              </div> */
}
