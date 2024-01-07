import RestaurentCard from "./RestaurentCard";
import resLists from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [search, setSearch] = useState("");
  const [restNameFilter, setRestNameFilter] = useState(resLists);

  const searchList = () => {
    let data = resLists.filter((data) => {
      if (search.length === 0) return data;
      return data.info.name.toLowerCase().includes(search.toLowerCase());
    });
    setRestNameFilter(data);
    setSearch("");
  };

  return (
    <div className="body">
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
      <div className="res-container">
        {restNameFilter.map((data) => {
          return <RestaurentCard key={data.info.id} resData={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
