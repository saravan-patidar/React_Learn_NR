import { useEffect, useState } from "react";
import { MENU_CARD_URL } from "./constants";

const useRestaurantCard = (resId) => {
  // fetch data and return
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const data = await fetch(MENU_CARD_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantCard;
