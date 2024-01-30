import { useEffect, useState } from "react";
import useRestaurants from "../../episode12/utils/useRestaurants";
import Shimmer from "../../episode12/components/Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard, {
  withHighRatingLabel,
} from "../../episode12/components/RestaurantCard";

const Body = () => {
  const resList = useRestaurants();
  const [highRated, setHighrated] = useState([]);
  const [resNotFound, setResNotFound] = useState(null);
  const [search, setSearch] = useState("");
  const RestaurantsTopRated = withHighRatingLabel(RestaurantCard);
  const [filterRestro, setFilterRestro] = useState([]);
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    filterRestro ? setFilterRestro(resList) : null;
  }, [resList]);

  const searchRestaurants = () => {
    if (search != "") {
      const searchData = resList.filter((item) => {
        return item?.info?.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilterRestro(searchData);
      setSearch("");
      if (searchData.length === 0) {
        return setResNotFound("Restaurants not found !");
      }
    } else {
      setResNotFound(null);
      setSearch("");
      setFilterRestro(resList);
    }
  };

  return (
    <div className="bg-gray-200 mt-20">
      <div className="flex p-4 justify-center items-center gap-2">
        <div>
          <label
            className={` p-2  rounded-xl text-white shadow shadow-orange-300 border hover:bg-orange-600 ${
              isCheck ? "bg-orange-500" : "bg-orange-700 border-red-600"
            }`}
            htmlFor="check"
          >
            High Rated
          </label>
          <input
            className="hidden"
            type="checkbox"
            id="check"
            value={isCheck}
            checked={!isCheck}
            onChange={() => {
              setIsCheck(!isCheck);
              if (isCheck) {
                setHighrated(filterRestro ? filterRestro : resList);
                const filterData = filterRestro.filter((list) => {
                  return list.info.avgRating > 4.3;
                });
                setFilterRestro(filterData);
              } else {
                setFilterRestro(highRated);
              }
            }}
          />
        </div>

        <div>
          <input
            data-testid="searchBox"
            className="p-2 rounded-s-full w-80 shadow shadow-orange-300 hover:border-red-400 border-none outline-none"
            type="text"
            autoComplete="off"
            name="search"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="p-2 bg-orange-700 rounded-e-full text-white shadow shadow-orange-300 hover:bg-orange-500 "
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
            (filterRestro.length === 0 ? resList : filterRestro).map((data) => (
              <Link to={"/restaurants/" + data?.info?.id} key={data?.info?.id}>
                {data?.info?.avgRating >= 4.4 ? (
                  <RestaurantsTopRated resData={data?.info} />
                ) : (
                  <RestaurantCard resData={data?.info} />
                )}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default Body;
