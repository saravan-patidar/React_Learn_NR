import { useEffect, useState } from "react";
import { MAIN_URL } from "./constants";

const useRestaurants = () => {
  const [resLists, setResLists] = useState([]);
  // const [restNameFilter, setRestNameFilter] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(MAIN_URL);
    const json = await data.json();
    const list =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResLists(list);
    // setRestNameFilter(list);
  };
  return resLists;
};
export default useRestaurants;
