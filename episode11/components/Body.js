import { useState } from "react";
import useRestaurants from "../../episode11/utils/useRestaurants";
import Shimmer from "../../episode11/components/Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "../../episode11/components/RestaurantCard";

const Body = () => {
  const [filterRestro, setFilterRestro] = useState([]);
  const [resList, restNameFilter] = useRestaurants();
  const [search, setSearch] = useState();

  return (
    <div className="bg-gray-200">
      <div className="flex p-4 justify-center items-center gap-2">
        <button
          className="p-2 bg-orange-700 rounded-xl text-white shadow shadow-orange-300 hover:border-red-400 border"
          onClick={() => {
            const filterData = resList.filter((list) => {
              list.info.avgRating > 4;
            });
            setFilterRestro(filterData);
          }}
        >
          Top rated Restaurants
        </button>
        <div>
          <input
            className="p-2 rounded-s-full w-80 shadow shadow-orange-300 hover:border-red-400 border-none outline-none"
            type="text"
            name="search"
            placeholder="Search restaurants..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="p-2 bg-orange-700 rounded-e-full text-white shadow shadow-orange-300 hover:border-red-400 border"
            onClick={() => {
              const searchData = resList.filter((item) => {
                if (search.length === 0) return item;
                item.info.name.toLowerCase().includes(search.toLowerCase());
                setFilterRestro(searchData);
                setSearch("");
              });
            }}
          >
            Search
          </button>
        </div>
      </div>
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex justify-evenly flex-wrap w-10/12 border border-red-600 m-auto">
          {(filterRestro.length === 0 ? restNameFilter : filterRestro).map(
            (data) => {
              return (
                <Link to={"/restaurants/" + data.info.id} key={data.info.id}>
                  <RestaurantCard resData={data} />
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
