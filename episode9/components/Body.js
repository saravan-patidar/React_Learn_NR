import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [search, setSearch] = useState("");
  const [resList, restNameFilter] = useRestaurants();
  const [fiterRestro, setFilterRestro] = useState([]);

  const searchList = () => {
    let data1 = resList.filter((data) => {
      if (search.length === 0) return data;
      return data.info.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilterRestro(data1);
    setSearch("");
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = fiterRestro.filter(
              (item) => item.info.avgRating > 4
            );
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
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {(fiterRestro.length === 0 ? restNameFilter : fiterRestro).map(
            (data) => {
              return (
                <Link
                  to={"/restaurants/" + data.info.id}
                  key={data.info.id}
                  className="link"
                >
                  <RestaurentCard resData={data} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
