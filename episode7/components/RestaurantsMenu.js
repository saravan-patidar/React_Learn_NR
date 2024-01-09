import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import starLogo from "../../imges/star.png";
import Shimmer from "./Shimmer";
import { ITEM_IMG_URL, MENU_CARD_URL } from "../utils/constants";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(MENU_CARD_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    sla,
    totalRatingsString,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info;

  const id = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  const itemCards = resInfo.cards
    .find((x) => x.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR.cards.map((x) => x.card.card)
    .filter((x) => x["@type"] === id)
    .map((x) => x.itemCards)
    .flat()
    .map((x) => x.card.info);
  // console.log(itemCards[0].name);

  return (
    <div className="menu-container">
      <div className="info">
        <div className="hotel-detail">
          <h2 className="hotel-name">{name}</h2>
          <p>{cuisines}</p>
          <p>{feeDetails.message}</p>
        </div>
        <div className="price-menu">
          <h3>{costForTwoMessage}</h3>
          <h4>{sla.slaString}</h4>
        </div>
        <div className="rating">
          <p className="rate">
            <img src={starLogo} className="star" /> {avgRating}
          </p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="items-show">
        {itemCards.map((item) => {
          const { id, name, description, price, imageId } = item;
          return (
            <div key={id} className="itemBox">
              <div className="text-details">
                <h4 className="heading">
                  {name} - {price}
                </h4>
                <p>{description}</p>
              </div>
              <div className="img-det">
                <img
                  src={ITEM_IMG_URL + imageId}
                  alt="menu-img"
                  className="img-item"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantsMenu;
