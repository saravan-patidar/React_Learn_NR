import starLogo from "../../imges/star.png";
import { RES_IMG_URl } from "../utils/constants";

const RestaurentCard = (props) => {
  // console.log(props.resData.info.sla.deliveryTime);
  const { name, avgRating, sla, costForTwo, cuisines, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card">
      <div className="res-img-box">
        <img
          src={RES_IMG_URl + cloudinaryImageId}
          alt="res-img"
          className="res-img"
        />
      </div>
      <div className="res-desc">
        <h3 className="res-name ">{name}</h3>
        <div className="res-box">
          <h4 className="res-rating">
            <img src={starLogo} className="star" />
            {avgRating}
          </h4>
          <h4 className="res-time">{sla.deliveryTime} mins</h4>
          <h3 className="res-price ">{costForTwo}</h3>
        </div>
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};
export default RestaurentCard;
