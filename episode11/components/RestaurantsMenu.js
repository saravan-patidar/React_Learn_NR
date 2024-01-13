import { ITEM_IMG_URL, CARD_ID } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../../episode9/components/Shimmer";
import useRestaurantCard from "../../episode9/utils/useRestaurantCard";
import starLogo from "../../imges/star.png";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantCard(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    costForTwoMessages,
    cuisines,
    sla,
    totalRatingsString,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo.cards
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR.cards.map((x) => x.card.card)
      .filter((x) => x["@type"] === CARD_ID)
      .map((x) => x.itemCards)
      .flat()
      .map((x) => x.card.info) || [];

  const uniqueMenuItems = [];
  itemCards.map((item) => {
    if (!uniqueMenuItems.find((x) => x.id === item.id)) {
      uniqueMenuItems.push(item);
    }
  });

  return (
    <div>
      <div>
        <div>
          <h2 className="font-bold">{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{feeDetails.message}</p>
        </div>
        <div>
          <h3>{costForTwoMessages}</h3>
          <h4>{sla.slaString}</h4>
        </div>
        <div>
          <p className="rate">
            <img src={starLogo} className="star" /> {avgRating}
          </p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div>
        {uniqueMenuItems.map((item) => {
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
