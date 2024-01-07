import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [search, setSearch] = useState("");
  const [fiterRestro, setFilterRestro] = useState([]);
  const [restNameFilter, setRestNameFilter] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
            setFilterRestro(filterList);
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
