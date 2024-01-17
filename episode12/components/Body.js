import { useState } from "react";
import useRestaurants from "../../episode12/utils/useRestaurants";
import Shimmer from "../../episode12/components/Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard, {
  withHighRatingLabel,
} from "../../episode12/components/RestaurantCard";

const Body = () => {
  const [resList, restNameFilter] = useRestaurants();
  const [resNotFound, setResNotFound] = useState(null);
  const [search, setSearch] = useState("");
  const RestaurantsTopRated = withHighRatingLabel(RestaurantCard);
  const [filterRestro, setFilterRestro] = useState([]);

  const searchRestaurants = () => {
    if (search != "") {
      const searchData = resList.filter((item) => {
        return item.info.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilterRestro(searchData);
      setSearch("");
      if (searchData.length === 0)
        return setResNotFound("Restaurants not found !");
    } else {
      setResNotFound(null);
      setSearch("");
    }
  };

  return (
    <div className="bg-gray-200 mt-20">
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
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
      </div>
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex justify-center flex-wrap w-10/12 gap-4 m-auto py-9">
          {resNotFound !== null ? (
            <div className="h-[60vh] ">
              <p className="capitalize text-red-600 font-extrabold text-lg p-3 m-3">
                {resNotFound}
              </p>
            </div>
          ) : (
            (filterRestro.length === 0 ? restNameFilter : filterRestro).map(
              (data) => (
                <Link to={"/restaurants/" + data.info.id} key={data.info.id}>
                  {data.info.avgRating >= 4.4 ? (
                    <RestaurantsTopRated resData={data} />
                  ) : (
                    <RestaurantCard resData={data} />
                  )}
                </Link>
              )
            )
          )}
        </div>
      )}
    </div>
  );
};
export default Body;
