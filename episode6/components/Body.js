import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { MAIN_URL } from "../utils/constants";

const Body = () => {
  const [search, setSearch] = useState("");
  const [fiterRestro, setFilterRestro] = useState([]);
  const [restNameFilter, setRestNameFilter] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(MAIN_URL);
    const json = await data.json();
    const resLists =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(resLists);
    setRestNameFilter(resLists);
    setFilterRestro(resLists);
  };

  const searchList = () => {
    let data = fiterRestro.filter((data) => {
      if (search.length === 0) return data;
      return data.info.name.toLowerCase().includes(search.toLowerCase());
    });
    setRestNameFilter(data);
    setSearch("");
  };

  return fiterRestro?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = fiterRestro.filter(
              (item) => item.info.avgRating > 4
            );
            console.log(filterList);
            setRestNameFilter(filterList);
          }}
        >
          Top Rated restaurants
        </button>
        <div className="search-box">
          <input
            type="text"
            value={search}
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="search-btn" onClick={searchList}>
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {restNameFilter.map((data) => {
          return <RestaurentCard key={data.info.id} resData={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
