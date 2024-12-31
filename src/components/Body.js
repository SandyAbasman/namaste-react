import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Loader from "../Loading";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturantList from "../utils/useResturantList";



const Body = () => {
  // Local State Variable - Super powerful variable

  const [searchedText, setSearchedText] = useState("");

  const onlineStatus = useOnlineStatus();
  const [listOfRestaurants, filteredRestursnt] = useResturantList();

  if (onlineStatus === false) {
    return <h1> seems you are offline now</h1>;
  }

  return filteredRestursnt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="search-box"
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <button
            onClick={() => {
              const oklist = listOfRestaurants.filter((item) =>
                item.info.name
                  .toLocaleLowerCase()
                  .includes(searchedText.toLocaleLowerCase())
              );
              setFilteredResturant(oklist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestursnt.map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
