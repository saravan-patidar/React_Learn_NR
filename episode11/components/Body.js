import { useState } from "react";
import useRestaurants from "../../episode11/utils/useRestaurants";
import Shimmer from "../../episode11/components/Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard, {
  withHighRatingLabel,
} from "../../episode11/components/RestaurantCard";

const Body = () => {
  const [filterRestro, setFilterRestro] = useState([]);
  const [resList, restNameFilter] = useRestaurants();
  const [search, setSearch] = useState("");
  const RestaurantsTopRated = withHighRatingLabel(RestaurantCard);

  return (
    <div className="bg-gray-200">
      <div className="flex p-4 justify-center items-center gap-2">
        <button
          className="p-2 bg-orange-700 rounded-xl text-white shadow shadow-orange-300 hover:border-red-400 border"
          onClick={() => {
            const filterData = resList.filter((list) => {
              return list.info.avgRating > 4;
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="p-2 bg-orange-700 rounded-e-full text-white shadow shadow-orange-300 hover:border-red-400 border"
            onClick={() => {
              const searchData = resList.filter((item) => {
                // console.log(search + " " + item);
                if (search === undefined) return item;
                return item.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              setFilterRestro(searchData);
              setSearch("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex justify-center flex-wrap w-10/12 gap-4 m-auto py-9">
          {(filterRestro.length === 0 ? restNameFilter : filterRestro).map(
            (data) => {
              return (
                <Link to={"/restaurants/" + data.info.id} key={data.info.id}>
                  {data.info.avgRating >= 4.4 ? (
                    <RestaurantsTopRated resData={data} />
                  ) : (
                    <RestaurantCard resData={data} />
                  )}
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
