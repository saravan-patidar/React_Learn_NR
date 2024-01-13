import starLogo from "../../imges/star.png";
import { RES_IMG_URl } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, costForTwo, sla, avgRating, cuisines } =
    resData?.info;
  return (
    <div className="border-black border w-80">
      <div>
        <img
          className="w-52"
          src={RES_IMG_URl + cloudinaryImageId}
          alt="res-img"
        />
      </div>
      <div>
        <h3>{name}</h3>
        <div className="border border-red-600 flex">
          <h4 className="flex items-center">
            <img className="w-8" src={starLogo} alt="starLogo" /> {avgRating}
          </h4>
          <h4>{sla.deliveryTime} Mins</h4>
          <h3>{costForTwo}</h3>
        </div>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
